import { useEffect, useState } from "react";
function ProductDetails(props){

    const item = props.item;
    const isArray = Array.isArray(item);
    const [totalCost, setTotal] = useState(0);

    useEffect(()=>{
        if(isArray){
            let tot = 0;
            item.map((item, index)=>{
                tot+=item.price;
            }
            
        );
        setTotal(tot);
        }
        
    }, [item, isArray]);

    return(<>
    <div>
        
    <h3><b>Cost:</b> {isArray? totalCost :item.price}$</h3>
  
    </div>
    
    </>);

}
export default ProductDetails;