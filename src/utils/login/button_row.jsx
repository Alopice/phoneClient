import { useNavigate } from "react-router-dom";
function ButtonRow(props){
    const navigate = useNavigate();
    const onCancel = () =>{

        return navigate("/");
    }

    return(
        <>
        <div className="flex flex-row justify-around m-2">

            <button className="bg-white p-2 rounded-md shadow-md shadow-black" type="type"><b>Login</b></button>
            <button className="bg-white p-2 rounded-md shadow-md shadow-black" type="button" onClick={()=>onCancel()}><b>Cancel</b></button>

        </div>
        </>
    );
}
export default ButtonRow;