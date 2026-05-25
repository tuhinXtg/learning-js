export default function Singer({singer}){
    return(
        <div>
            <h3>Singer Name : {singer.name}</h3>
            <p>Singer age : {singer.age}</p>
        </div>
    )
}