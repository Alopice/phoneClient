import { useNavigate } from "react-router-dom";
function TaskBar(){
    const navigate = useNavigate();

    const onHome = ()=>{
        navigate('/');
    }
    const onSettings = ()=>{
        const token = localStorage.getItem('token');
        if(!token){
            return navigate('/login');
        }
        navigate("/settings");
    }
    const onCart = () =>{
        const token = localStorage.getItem("token");
        if(!token){
            return navigate('/login');
        }
        navigate('/cart');
    }
    const onWishlist = () =>{
        const token = localStorage.getItem("token");
                if(!token){
                    return navigate('/login');
                }
                navigate("/wishlist");
    }
    const onOrders = () =>{
        const token = localStorage.getItem("token");
                if(!token){
                    return navigate('/login');
                }
                navigate("/orders");
    }


    return(<>
    <div className="bg-violet-950 flex absolute flex-row z-40 p-1 h-15 top-0 justify-around w-full ">
        <TaskButton text="home" func={ ()=>onHome()}/>
        <TaskButton text="settings" func={ ()=>onSettings()}/>
        <TaskButton text="wishlist" func={ ()=>onWishlist()}/>
        <TaskButton text="cart" func={ ()=>onCart()}/>
        <TaskButton text="orders" func={ ()=>onOrders()}/>
        
        
        
    </div>
    </>);
}

function TaskButton(props){
    return(
        <><button  className="text-white" onClick={props.func}>
            <b>{props.text}</b>
            </button></>
    );
}

export default TaskBar;