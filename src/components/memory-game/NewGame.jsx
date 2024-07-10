import React from 'react'
import logo from '../../assets/img/emoji-puzzle.jpg'

export default function NewGame({onClick4, onClick6, onClick8, onClick10}) {
  return (
    <div className='newGame'>
        <button className='btn' onClick={onClick4}>New 4x4 Layout</button>
        <button className='btn' onClick={onClick6}>New 6x6 Layout</button>
        <button className='btn' onClick={onClick8}>New 8x8 Layout</button>
        <button className='btn' onClick={onClick10}>New 10x10 Layout</button>
    </div>
  )
}
