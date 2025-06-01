import axios from "axios";
const serverURL = import.meta.env.VITE_SERVER_API_URL;
export const getFromOrders = (token)=>{
    axios.get(`${serverURL}orders/products`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );
}
export const addToOrders = (product_name, product_id, price, token) =>{
    axios.post(`${serverURL}orders/products`,

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
export const deleteFromOrders = (product_id, token) =>{
    axios.post(`${serverURL}orders/products`,
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