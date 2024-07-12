import React from 'react'
import GameOverLabel from '../../assets/img/gameover.jpg'

export default function GameOver() {
  return (
    <>
    <div className='modal-game'>
        <img src={GameOverLabel} alt="" />
        <div>Times up!</div>
        <button>OK</button>
    </div>
    </>
  )
}
