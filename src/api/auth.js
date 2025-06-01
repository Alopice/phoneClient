import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const serverURL = import.meta.env.VITE_SERVER_API_URL;
export const register = ({first_name, last_name, email, password, address})=>axios.post(
    `h${serverURL}auth/register`,
    {
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        address:address
    }

);

export const login = (email, password)=>axios.post(
    `${serverURL}auth/login`,
    {
        email:email,
        password:password,
    }
);

