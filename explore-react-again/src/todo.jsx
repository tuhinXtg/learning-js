export default function Todo({task, isdone}){
    if(isdone === true){
        return(
            <li>Task : {task}</li>
        )
    }
    else{
        return <li>Work on : {task}</li>
    }
}