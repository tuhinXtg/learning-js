import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const handleRemove = () =>{
        const newTeam = team - 1
        setTeam(newTeam)
    }

    const teamstyles = {
        border: '2px solid tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
        paddingInline: '50px'
    }

    return (
        <div style={teamstyles}>
            <h3>Players : {team}</h3>
            <div style={{display: 'flex', gap: '5px'}}>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleRemove}>remove</button>
            </div>
        </div>
    )
}