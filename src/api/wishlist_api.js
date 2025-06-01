import axios from "axios";
const serverURL = import.meta.env.VITE_SERVER_API_URL;
export const getFromWishlist = (token)=>{
    axios.get(`${serverURL}wishlist/products`,
        {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );
}
export const addToWishlist = (product_name, product_id, price, token) =>{
    axios.post(`${serverURL}wishlist/products`,

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
export const deleteFromWishlist = (product_id, token) =>{
    axios.post(`${serverURL}wishlist/products`,
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