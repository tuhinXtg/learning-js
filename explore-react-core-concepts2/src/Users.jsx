import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    )
}


// declare a state to hold the data 
// UseEffect with callback and dependency array 