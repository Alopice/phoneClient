import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../api/cart_api.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ButtonRow(props){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const cartMutation = useMutation({mutationFn:addToCart});
    const navigate = useNavigate();
    const item = props.data;

    const onAddToCart  = async() => {
        const token = localStorage.getItem("token");
        if(!token){
            navigate('/login');
        }else{
            try
            {
                const response = await axios.post(`${serverURL}cart/products`,
                {
                    product_name: props.data.title,
                    product_id: props.data.id,
                    price: props.data.price,
                    image_url: props.data.images[0]
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                    
                    }
                }
            );}
            catch(error){
               return alert(error);
            }
        }
    }
    const onBuy = () =>{
        const token = localStorage.getItem("token");
                if(!token){
                    return navigate("/login");
                }
            
                return navigate(`/checkout/${10}`, {state:{item}});
    }

    return(
        <>
        <div className="flex flex-row  w-full  mt-20 ">
            <button className="bg-blue-600 w-full p-3 mr-1 ml-1  " onClick={()=>onBuy()}>
                buy
            </button>

            <button className="bg-blue-300 w-full p-3 mr-1" onClick={()=>onAddToCart()}>
                add to cart
                </button>
        </div>
        </>
    );
}





export default ButtonRow;