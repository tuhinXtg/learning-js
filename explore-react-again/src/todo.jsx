// export default function Todo({task, isdone}){
//     if(isdone === true){
//         return(
//             <li>Task : {task}</li>
//         )
//     }
//     else{
//         return <li>Work on : {task}</li>
//     }
// }


// conditional rendering 3 ternary operator
// export default function Todo({task, isdone}){
//     return(
//         <li>{isdone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }

// conditional rendering option 4: 
export default function Todo({task, isdone}){
    return(
        <li>{task} {isdone && ':Done'}</li>
    )
}