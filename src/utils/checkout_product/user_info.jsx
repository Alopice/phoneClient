function UserInfo(props){

    const user = props.user;

    return(
        <>
        <div className="shadow-sm shadow-black m-2 p-2 w-fit">
        <h1> <b>Purchase for {user.first_name}</b></h1>
        <p>{user.address}</p>
        <p>{user.phone_number}</p>
        </div>
        </>
    );

}
export default UserInfo;