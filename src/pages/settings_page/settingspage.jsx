import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SettingsProfile from "../../utils/settings/profile";
import Operations from "../../utils/settings/operations";
function Settings(){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {data, error, isLoading} = useQuery(
        {
            queryKey:['user',1],
            queryFn: async()=>{
                const response = await axios.get(
                    `${serverURL}users/user`,
                    {
                        headers:{
                            Authorization:`Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    },

                );
                return response.data;
            },
            staleTime: 1 * 60 * 1000,
            
        }
    );
    useEffect(
        ()=>{
            if(error){
                navigate("/");
            }
        }
    );
    if(isLoading || !data){
        return(<><div className="mt-20"><h1>loading....</h1></div></>);
    }
    
    const user = data.user;


    const onLogout = () =>{
        localStorage.removeItem("token");
        navigate("/")
    }
    const onEdit = () =>{
        navigate("/edit")
    }

    return(<>
        <div className="flex flex-col mt-15  bg-blue-950 items-center min-h-screen">
            <div className="mt-10">
            <SettingsProfile user={user}/>
            <Operations/>
            </div>
            
        </div>
    </>);
}
export default Settings;