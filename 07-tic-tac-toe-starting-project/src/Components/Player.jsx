import { useState } from "react"

export default function Player({name , symbol}) {
const [playerName , setPlayerName] = useState(name)
const [ isEditing , setIsEditing] = useState(false);

function handleEdit (){
    setIsEditing((prevState) => !prevState)
}

function handleChange(e){
    setPlayerName(e.target.value)

}

    return(
        <li>
          <span className="player"> 
          { isEditing 
          ?(<input type="text required" value={playerName} onChange={handleChange}/>)
          :(<span className="player-name">{playerName}</span>) 
          }
          <span className="player-symbol">{symbol}</span>
          </span> 
          <button onClick={handleEdit}>{isEditing?"Save":"Edit"}</button>
        </li>         
    )
    
}