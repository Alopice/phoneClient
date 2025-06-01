import axios from "axios";
import FormInput from "../general_components/form_input";
import { useState,useEffect } from "react";

function OrderForm(props) {
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const item = props.item;
    const token = localStorage.getItem("token");
    const [isDisabled, setDisabled] = useState(true);
    const [totalCost, setTotal] = useState(0);
    const isArray = Array.isArray(item);

    useEffect(()=>{
        if(isArray){
            
            let tot = 0;
            item.map((item, index)=>{
                tot+=item.price;
            }
            
        );
        setTotal(tot);
        }
        
    }, [item, isArray]);

    const onInput = (value) => {
        const cost = isArray?totalCost.toString():item.price.toString();
        if (value == cost) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    const onOrder = async () => {
        
        try {
            if(!isArray){
                const response = await axios.post(
                    `${serverURL}orders/products`,
                    {
                        product_name: item.title,
                        product_id: item.id,
                        price: item.price,
                        image_url: item.images[0]
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (response.status == 201) {
                    return alert("Order successful");
                }
            }
            else{
               
                const requests = item.map((product, index)=>{
                   
                    return axios.post(
                        `${serverURL}orders/products`,
                        {
                            product_name: product.product_name,
                            product_id: product.product_id,
                            price: product.price,
                            image_url: product.image_url,
                        
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                });
                const results = await Promise.all(requests);
                alert("Order successful");
            }
           
        } catch (error) {
            return alert(error);
        }
    }


    return (<>
        <div>
            <div className="flex flex-col items-start lg:items-center">
                
                <div className="flex flex-row">
                    <label htmlFor="amount" className="mr-4"><b>Amount:</b></label>
                    <input type="text" id="amount" className="shadow-sm shadow-black" onChange={(e)=>onInput(e.target.value)}/>
                </div>
                
                <br />
                <button className="shadow-sm shadow-black  p-1 mt-3 ml-1 rounded-2xl"
                onClick={() => onOrder()} disabled={isDisabled}>Place Order</button>

            </div>
        </div>

    </>);

}
export default OrderForm;