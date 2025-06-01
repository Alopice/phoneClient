import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "../utils/checkout_product/user_info";
import ProductDetails from "../utils/checkout_product/product_details";
import OrderForm from "../utils/checkout_product/order_form";
function CheckoutPage(){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const location = useLocation();
    const [isArray, setIsArray] = useState(false);
    const [totalCost, setTotal] = useState("");
    
    const item = location.state?.item;
    useEffect(()=>{
        setIsArray(Array.isArray(item));
        if(isArray){
            const {total} = useParams();
            setTotal(total);
        }
    }, [item]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {data, error, isLoading} = useQuery(
        {
            queryKey:["user", 1],
            queryFn: async()=>{
                const response = await axios.get(`${serverURL}users/user`,
                    {
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    },
                );
                return response.data;
            }
        }
    );
    useEffect(()=>{
        if(error){
            navigate("/");
        }
    }, [error]);
    if(isLoading || !data){
        return(<><div><h1>isLoading...</h1></div></>);
    }
  
  
    const user = data.user;

    
    return(<>
    <div className="mt-15 flex  flex-col lg:items-center">
        <UserInfo user={user}/>
        <ProductDetails item={item} total={totalCost}/>
        <OrderForm item={item} total={totalCost}/>
    </div>
    </>);


}


export default CheckoutPage;