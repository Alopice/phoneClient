import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heart, Share } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function Banner(props){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
   const device = props.data;
   const navigate = useNavigate();
   const token = localStorage.getItem("token");
   const [fillColor, setFillColor] = useState('');
   const queryClient = useQueryClient();

   const onRemove= async(item)=>{
    await axios.delete(
        `${serverURL}wishlist/products`,

        {
            data: {product_id:item.id},
            headers:{
                Authorization: `Bearer ${token}`,
                
            }
        }

    );
    queryClient.invalidateQueries(["wishlist_items"]);
}

   const {data, error, isLoading} = useQuery({
    queryKey:["wishlist_items"],
    queryFn: async()=>{
        const response = await axios.get(`${serverURL}wishlist/products`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        );
        return response.data.products;
    },
    
   });
   useEffect(()=>{
    if(!data){
        return;
    }
   
    const exists = data.some(item=>item.product_id == device.id);
    if(exists){
        setFillColor("red")
    }else{
        setFillColor("");
    }
    //alert(exists)
   },[data, device.id] );
   const onAddWishlist = async()=>{
    
    


    if(!token){
        navigate("/login");
    }else{

        try{
            if(!data){
        
            }else{
                if(data.some(item=>item.product_id == device.id)){
                   
                    await onRemove(device);
                    
                    setFillColor("black");
                    return;
                }
            }
            
            const response = await axios.post(`${serverURL}wishlist/products`,
                {
                    product_name: props.data.title,
                    product_id: props.data.id,
                    price: props.data.price,
                    image_url: props.data.images[0]
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`,
                        "Content-Type":"application/json"
                    }
                }
            );
            setFillColor("red");
            queryClient.invalidateQueries(["wishlist_items"]);
        }catch(error){
            console.error(error);
        }
    }
   }
   
    return(
        <>
        <div className="w-full bg-violet-400  flex flex-col  mt-15 relative items-center">
            <img 
            className="w-1/2 lg:w-1/3" 
            src={device.images[0]} alt="" loading="eager"/>


           <button className="absolute bottom-0 right-0 m-3" onClick={()=>onAddWishlist()}><Heart color={fillColor} fill={fillColor}/></button>
            
            
        </div>
        </>
    );
}
export default Banner;