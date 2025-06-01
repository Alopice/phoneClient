import ShowCaseImage from "../utils/homepage/showcase";
import Cards from "../utils/homepage/items_card";
function HomePage(){
    return(<>
    <div className="bg-blue-950 min-h-screen">
    <ShowCaseImage/>
    <Cards/>
    </div>
    </>);
}
export default HomePage;