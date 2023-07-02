import React from 'react'
import './Games.css'

export default function GameData(props) {
  return (
    <>
        <div className='g-card'>
            <div className="game-image">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </>
  )
}
