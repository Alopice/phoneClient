import { useNavigate } from "react-router-dom";

function ListViewCard(props){
    const navigate = useNavigate();
    const item = props.item;
    const buttonText = props.buttonText;
    const icon = props.icon;
    const func = props.func;

    const onTap= ()=>{
        return navigate(`/details/${item.product_id}`);
    }
    return(
        <>
        <div className="flex flex-row  justify-start relative bg-violet-500 m-1 border-1">
            <img  className="w-1/4 bg-white mr-2" src={item.image_url} alt="loading..." onClick={()=>onTap()}/>
            <div className="flex flex-col">
            <h1 className="text-xl"> <b>{item.product_name}</b></h1>
            <h3>${item.price}</h3>

            </div>
            <button className="absolute bottom-0 right-0 m-3" onClick={func}>{props.buttonText}</button>
        </div>
        </>
    );
}

export default ListViewCard;