import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../general_components/form_input";
import ButtonRow from "./buttonrow";
function EditForm(props){
    const serverURL = import.meta.env.VITE_SERVER_API_URL;
    const user = props.user;
    const navigate = useNavigate();
    if(!user){
        return(<><div><h1>LOADING.....</h1></div></>);
    }
    const token = localStorage.getItem("token");

    const [first_name, setFirstN] = useState(user.first_name);
    const [last_name, setLastN] = useState(user.last_name);
    const [phone_number, setPhone] = useState(user.phone_number);
    const [address, setAddress] = useState(user.address);

    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
        
        const response = await axios.put(
            `${serverURL}api/users/user`,
            {
                first_name: first_name,
                last_name:last_name,
                phone_number:phone_number,
                address:address
            },
            {
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
            
        );
        if(response.status == 200){
         
            alert("success!");
            return navigate("/settings");
            
        }
        if(response.status == 400){
            return alert(response.data.msg);
        }
    }catch(error){
        alert(error);
    }
    }


    return(<>
        <form onSubmit={onSubmit}>
            <div className="flex flex-col bg-white mt-10 rounded-xl p-3">
            <FormInput inp_id="first_name" label_text="First name" type="text" onchange_f={setFirstN} value={user.first_name}/>
        <FormInput inp_id="last_name" label_text="Last name" type="text" onchange_f={setLastN} value={user.last_name}/>
        <FormInput inp_id="phone" label_text="Phone" type="text" onchange_f={setPhone} value={user.phone_number}/>
        <FormInput inp_id="address" label_text="address" type="text" onchange_f={setAddress} value={user.address}/>
        
        <ButtonRow/>
            </div>
        
        </form>
    </>);
}
export default EditForm;