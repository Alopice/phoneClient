import { useNavigate } from "react-router-dom";
import { PowerOff, Edit } from "lucide-react";
function Operations(){
    const navigate = useNavigate();
    const onEdit = ()=>{
        return navigate('/edit');
    }
    const onLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <>
        <div className="flex flex-col   rounded-b-xl border-b-1 border-r-1 border-l-1 p-10 bg-white">
            <div className="flex flex-row justify-center pb-5">
            <Edit/>
            <button className="ml-1"
            onClick={()=>onEdit()}><b>Edit details</b></button>
            </div>
            <div className="flex flex-row justify-center pt-5">
                <PowerOff color="red"/>
            <button className=" text-red-500 ml-1"
            onClick={()=>onLogout()}><b>Logout</b></button>
            </div>
            
        </div>
        </>
    );
}
export default Operations;