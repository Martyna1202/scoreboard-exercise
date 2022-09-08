import React, {useContext} from 'react'
import { ScoreContext } from './contexts/ScoreContext'

function Scoreboard() {

    const {score, plusScore, minusScore} = useContext(ScoreContext)
  return (
    <div>
        <h2>Scoreboard</h2>
        <h3>{score}</h3>
        <button onClick={minusScore}>-</button>
        <button onClick={plusScore}>+</button>
    </div>
  )
}

export default Scoreboard