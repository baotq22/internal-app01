import React from 'react'
import GameOverLabel from '../../assets/img/gameover.jpg'

export default function GameOver({isGameOver, back}) {
  return (
    <>
      <div className="gameOverOverlay" style={isGameOver}>
        <div className='modal-game'>
          <div className="img-block"><img className='img' src={GameOverLabel} alt="" /></div>
          <div className='content'>Times up!</div>
          <div className="btn-back"><button className='btn' onClick={back}>OK</button></div>
        </div>
      </div>
    </>
  )
}
