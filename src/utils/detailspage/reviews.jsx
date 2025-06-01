function Reviews(props){
    const review = props.data.reviews;
    return(
        <> 
        <div className="flex flex-col mt-5">
            <h1 className="text-3xl text-white"><b>Comments</b></h1>
        <ul>
            {
                review.map(
                    (item, index)=>{
                        return(
                            <li key={index}>
                                <div className="flex flex-col border p-5 m-5 border-white">
                                    <div className="flex flex-row">
                                    <h5 className="text-yellow-400 w-fit mr-2">{item.rating}</h5>
                                <h5 className="text-white"><b>{item.reviewerName}</b></h5>
                                    </div>
                                
                                <h5 className="text-white">{item.comment}</h5>
                                </div>
                            </li>
                        );
                    }
                )
            }
        </ul>
        </div>
        </>
    );
}
export default Reviews;