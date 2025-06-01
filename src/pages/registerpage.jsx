import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../utils/general_components/form_input";
import ButtonRow from "../utils/register/button_row";

function RegisterPage(){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const [first_name, setFirstN] = useState('');
    const [last_name, setLastN] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    const onSubmit = async(e)=>{
        
        e.preventDefault();
        try
        {
            const response = await axios.post(`${serverURL}auth/register`,
            {
                first_name:first_name,
                last_name:last_name,
                email:email,
                password:password,
                address:address,
                phone_number:phone_number
            }
        );
        if(response.status == 400){
            return alert("error");
        }
        navigate("/login");}
        catch(error){
            return alert(error);
        }
    }

    return(<>
        <div className="pt-15   flex flex-col justify-center min-h-screen items-center bg-blue-950">
            
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col bg-blue-200 rounded-xl shadow-xl shadow-pink-500 border-">

                    <FormInput inp_id="first_name" label_text="First name" type="text" onchange_f={setFirstN}/>
                    <FormInput inp_id="last_name" label_text="Last name" type="text" onchange_f={setLastN}/>
                    <FormInput inp_id="email" label_text="Email" type="email" onchange_f={setEmail}/>
                    <FormInput inp_id="password" label_text="Password" type="password" onchange_f={setPassword}/>
                    <FormInput inp_id="phone" label_text="Phone" type="text" onchange_f={setPhoneNumber}/>
                    <FormInput inp_id="address" label_text="Address" type="text" onchange_f={setAddress}/>
             
                    <ButtonRow/>
                    </div>
                   
                </form>
            
        </div>
    </>);
}
export default RegisterPage;