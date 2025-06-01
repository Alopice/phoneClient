import EditForm from "../../utils/settings/user_editor/edit_form";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function EditUser(){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const token = localStorage.getItem('token');
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
            }
        }
    );
    useEffect(
        ()=>{
            if(error){
                alert(error);
                navigate("/");
            }
        },
        [data]
    );
    if(isLoading || !data){
        return(<><div><h1>loading....</h1></div></>);
    }
    
    const user = data.user;

    return(<>
    <div className="mt-15 min-h-screen bg-blue-950 flex flex-col items-center">
        
        <EditForm user = {user}/>
    </div>
    </>);
}
export default EditUser;