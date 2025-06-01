
import { useNavigate } from "react-router-dom";
import { getDevices } from "../../data/phones.js";

function Cards() {
    const navigate = useNavigate();
    
    const devices = getDevices();
    const  onClick = (id)=>{
        
        navigate(`/details/${id}`);
    }
    return (
        <>
            <div className="grid grid-cols-3 gap-4 relative top-10  p-4 ">
                {
                    devices.map(
                        (item, index) => {
                            return (
                                
                                    <div key={index} className="w-full h-auto  p-1 flex flex-col justify-start border-2 border-white transform hover:translate-y-[-7px] transition-transform 100ms hover:shadow-2xl shadow-fuchsia-800 " onClick={()=>onClick(item.id)}>
                                        <img src={item.images[0]} alt="example" />
                                        <h1 className="self-center text-center text-white"><b>{item.title}</b></h1>
                                        <h2 className="self-center text-white"><b>{item.price}$</b></h2>
                                    </div>
                                
                            );
                        }
                    )
                }
            </div>
        </>
    );
}

export default Cards;