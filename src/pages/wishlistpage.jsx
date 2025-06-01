import { useQuery , useQueries, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Trash } from "lucide-react";
import ListViewCard from "../utils/general_components/listview_card";
function WishListPage(){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const token = localStorage.getItem("token");
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const wishlistPhones = [];
    const {data, error, isLoading} = useQuery(
        {
            queryKey:["items", 1],
            queryFn: async()=> {
                const response = await axios.get(`${serverURL}wishlist/products`,
                    {
                        headers:{
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    },
                
            );
            return response.data.products;
        }
        }
    );
    
        useEffect(()=>{
            if(error){
                alert(error);
        return navigate('/');
            }
            
        },[error, navigate]);
        
    if(isLoading || !data){
        return(<><h3>loading....</h3></>);
    }

    const onRemove= async(item)=>{
        await axios.delete(
            `${serverURL}wishlist/products`,

            {
                data: {product_id:item.product_id},
                headers:{
                    Authorization: `Bearer ${token}`,
                    
                }
            }

        );
        queryClient.invalidateQueries(["items"]);
    }
    return(
        <>
        <div className="pt-15 bg-blue-950 min-h-screen">
            <ul>
            {data.map((item, index)=>{
                return(
                    
                    <li key={index}>
                        <ListViewCard item={item} buttonText="remove" icon={<Trash/>} func={()=>onRemove(item)}/>
                    </li>
                    
                );
            })}
            </ul>
        </div>
        </>
    );
}
export default WishListPage;