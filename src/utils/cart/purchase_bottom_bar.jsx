import { useNavigate } from "react-router-dom";

function PurchaseBar(props) {

    const data = props.data;
    const item = data.products;
    const navigate = useNavigate();
    const onPurchase = () =>{
        if(item.length ==0){
            return alert("Nothing to order");
        }
        return navigate(`/checkout/${data.total}`, {state:{item}});
    }

    return (
        <>
            <div className="bg-white w-full h-10 fixed bottom-0 flex flex-row p-2 border-1">
                
                
                <button className="absolute right-0 mr-5 " onClick={()=>onPurchase()}><b>purchase</b></button>
                
                <h1>total: {data.total}$</h1>
               
            </div>
        </>
    );
}
export default PurchaseBar;