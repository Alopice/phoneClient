function SettingsProfile(props){
    const user = props.user;

    return(
        <>
        <div className="bg-white flex flex-col items-center p-10 border-1 rounded-t-xl">
            <div className="flex flex-row mb-4">
                <h1 className="mr-1 text-2xl"><b>{user.first_name}</b></h1>
                <h1 className="text-2xl"><b>{user.last_name}</b></h1>
            </div>
            
            <h1 className=" p-1 shadow-sm shadow-black">{user.email}</h1>
           
        </div>
        </>
    );
}
export default SettingsProfile;