export default function Friend({friends}){
    const {name, email} = friends;
    return(
        <div className="box">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}