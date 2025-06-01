import { useState } from "react";

function FormInput(props){
    
    const inp_id = props.inp_id;
    const label_text = props.label_text;
    const type = props.type;
    const stateValue = props.value??"";
    const [value, setValue] = useState(stateValue);
    return(
        <>
        <div className="flex flex-row m-3 justify-between">
            <label className="mr-1 self-center"
            htmlFor={inp_id}><b>{label_text}</b></label>
            <div className="flex flex-row items-center">
                <h1 className="m-1"><b>:</b></h1>
            <input className=" shadow-sm shadow-black"
            type={type} id={inp_id} onChange={(e)=> {
                setValue(e.target.value);
                return props.onchange_f(e.target.value)
            }} required value={value}/>
            </div>
            
        </div>
        </>
    );
}
export default FormInput;