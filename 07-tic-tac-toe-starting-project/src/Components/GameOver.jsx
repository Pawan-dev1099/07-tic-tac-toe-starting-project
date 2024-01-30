import React from 'react'

function GameOver({winner , onRestart}) {
  return (
    <div id='game-over'>
        <h2>Game Over!</h2>
      { winner &&<p>{winner} Won!</p>}
      { !winner &&<p>It's a Draw</p>}
       <p>
       <button onclick={handleRe}>Rematch!</button>
       </p>

    </div>
  )
}

export default GameOver