import { CheckLogin } from '../checkLogin'
import { useState, useEffect } from 'react'
import '../components/scss/Count.scss'
import Plus from '../assets/svg/plus-svgrepo-com.svg'
import Minus from '../assets/svg/minus-svgrepo-com.svg'
import Go from '../assets/svg/arrow-narrow-right-svgrepo-com.svg'
import ResetCount from '../assets/svg/refresh-ccw-alt-1-svgrepo-com.svg'

function ChildFnc(props) {
  const { count1 } = props
  const [Zero, setZero] = useState(false)

  useEffect(() => {
    setZero(count1 == 0)
  }, [count1])
  return (
    <div className='display'>
      <div>{"[" + count1 + "]"} - {Zero ? "A Zero" : "Not A Zero"}</div>
    </div>
  )
}

function ParentFnc() {
  const [count, setCount] = useState(0)
  CheckLogin()
  return (<>
    <div className="containerForAppPage">
      <div className="btnContainer">
        <DownFnc setCount={setCount} />
        <ChildFnc count1={count} />
        <UpFnc setCount={setCount} />
      </div>
      <SetInput setCount={setCount} />
      <Reset setCount={setCount} />
    </div>
  </>
  )
}

function UpFnc(props) {
  const { setCount } = props

  return (
    <>
      <button className='btnAction btnActionUp' onClick={() => setCount((count) => count + 1)}><img src={Plus} /></button>
    </>
  )
}

function DownFnc(props) {
  const { setCount } = props

  return (
    <>
      <button className='btnAction btnActionDown' onClick={() => setCount((count) => count - 1)}><img src={Minus} /></button>
    </>
  )
}

function Reset(props) {
  const { setCount } = props

  return (
    <>
      <button className='btnReset' onClick={() => setCount(0)}><img src={ResetCount} /></button>
    </>
  )
}

function SetInput(props) {
  const { setCount } = props
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const Action = () => {
    if (!isNaN(input)) {
      setCount(parseInt(input))
      setError(false)
    } else {
      setError(true)
    }
  }
  return (
    <>
      <div className="input-container">
        <input className='input-box' type="text" onChange={e => setInput(e.target.value)} />
        <button className='set-input' onClick={() => Action()}><img src={Go} /></button>
      </div>
      {error && <Error />}
    </>
  )
}

function Error() {
  return (
    <div className='errorLog'>Not a number!</div>
  )
}

export default ParentFnc