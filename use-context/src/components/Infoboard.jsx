import React from 'react'
import { useContext } from 'react'
import { ScoreContext } from './contexts/ScoreContext'

function Infoboard() {

    const {score} = useContext(ScoreContext)
  return (
    <div>
        
        {
            score > 100 ? <h1>Good job!</h1> : <h3>Let's make it over 100!</h3>
        }
    </div>
  )
}

export default Infoboard