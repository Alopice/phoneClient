function ItemDescription(props){
   const item = props.data;

    return(
        <>
        <div className="flex flex-col m-3">

            <h1 className="text-3xl text-white"><b>{item.title}<b/></b></h1>
            <h2 className="text-xl text-white">${item.price}</h2>
            <h1 className="text-xl text-white mb-5">{item.discountPercentage}% off</h1>
            <p className="text-white">{item.description}</p>

        </div>
        </>
    );
}
export default ItemDescription;