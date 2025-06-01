import { X, Info} from "lucide-react";
import { useState } from "react";



function Message(props){
    
    return(<>
    <div className="flex flex-row justify-center items-center fixed top-0 bottom-0 right-0 left-0 ">
    <div className=" bg-white text-center w-1/2 relative rounded-xl ">
            <button className="absolute right-1 top-1" onClick={()=>props.func(false)}>
                <X/>
            </button>
            
            <p className="mt-10 p-5"> <b>Disclaimer: </b>This is a demo website created for educational purposes only. All products and information are fictional, and no real purchases or deliveries will occur.
            <br /><b>Do not enter any sensitive information in any of the input fields.</b></p>
           
        </div>
    </div>
       
    
    </>);
}






function DisclaimerButton(props){
    return(
        <>
        <button onClick={()=>props.func(true)}
        className="
        text-black fixed bottom-12 right-12  p-6 aspect-square rounded-full bg-white">
            <Info fill="black" color="white"/>
        </button>
        </>
    );
}
function Disclaimer(){
    const [isOpen, setOpen] = useState(false);
    return(<>
    
       
    {isOpen&&<Message func={setOpen}/>}
    
    
    <DisclaimerButton func={setOpen}/>
    </>);
}
export default Disclaimer;
