import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from "../utils/general_components/form_input";
import ButtonRow from "../utils/login/button_row";
function LoginPage(){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onSubmit = async(e)=>{
        e.preventDefault();
        try
        {const response = await axios.post(`${serverURL}auth/login`,
            {
                email:email,
                password:password
            }
        );
        if(response.status === 200){
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate('/');
        }
        else{
            return alert("Invalid data");
        }
        
        return;
    }
        catch(error){
            return alert("server error occured, please try again after some time");
        }
        
    }

    const onRegister = ()=>{
        return navigate("/register");
    }

    return(
        <>
        <div className="pt-15 min-h-screen flex flex-col justify-center items-center bg-blue-950">
            
            
            <form onSubmit={onSubmit}>
                <div className="bg-blue-200 flex flex-col rounded-xl shadow-xl shadow-pink-500">
                <FormInput inp_id="email" label_text="Email" type="email" onchange_f={setEmail}/>
                <FormInput inp_id="password" label_text="Password" type="password" onchange_f={setPassword}/>
                <ButtonRow/>
                </div>
                
            </form>
            <div className="flex flex-row mt-5">
                <h2 className="mr-1 text-white">new user?</h2>
                <button className="text-white" onClick={()=> onRegister()}><u><b>register</b></u></button>
            </div>
            </div>
            
        
        </>
    );

}
export default LoginPage;