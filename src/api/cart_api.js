import axios from "axios";
const serverURL = import.meta.env.VITE_SERVER_API_URL;
export const getFromCart = (token)=>{
    axios.get(`${serverURL}cart/products`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }

    );
}
export const addToCart = (product_name, product_id, price, token) =>{
    axios.post(`${serverURL}cart/products`,

        {
            product_name:product_name,
            product_id:product_id,
            price:price
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );
}
export const deleteFromCart = (product_id, token) =>{
    axios.post(`${serverURL}api/cart/products`,
        {

            product_id:product_id,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );
}