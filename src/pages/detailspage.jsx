import { useParams } from "react-router-dom";
import { GetSpecificDevice } from "../data/phones.js";
import Banner from "../utils/detailspage/banner.jsx";
import ButtonRow from "../utils/detailspage/buttonrow.jsx";
import Reviews from "../utils/detailspage/reviews.jsx";
import ItemDescription from "../utils/detailspage/item_description.jsx";
function DetailsPage(){
    const {id} = useParams();
    const data = GetSpecificDevice(id);
    return(
        <>
        <div className="pt-3 bg-blue-950">
        <Banner data={data}/>
        <ItemDescription data={data}/>
        <ButtonRow data={data}/>
        <Reviews data={data}/>
        </div>  
        
        </>
    );

}
export default DetailsPage;