import { CheckLogin } from '../checkLogin'
import '../components/scss/App.scss'
import { useState, useEffect } from 'react'

function ChildFnc(props) {
  const { count1 } = props
  const [Zero, setZero] = useState(false)

  useEffect(() => {
    setZero(count1 == 0)
  }, [count1])
  return (
    <>
      <div>{count1}</div>
      <div>{Zero ? "A Zero" : "Not A Zero"}</div>
    </>
  )
}

function ParentFnc() {
  const [count, setCount] = useState(0)
  CheckLogin()
  return (
    <div className="containerForPage">
      <ChildFnc count1={count}/>
      <UpFnc setCount={setCount} />
      <DownFnc setCount={setCount} />
      <Reset setCount={setCount} />
      <SetInput setCount={setCount} />
    </div>
  )
}

function UpFnc(props) {
  const { setCount } = props

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Up</button>
    </>
  )
}

function DownFnc(props) {
  const { setCount } = props

  return (
    <>
      <button onClick={() => setCount((count) => count - 1)}>Down</button>
    </>
  )
}

function Reset(props) {
  const { setCount } = props

  return (
    <>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

function SetInput(props) {
  const { setCount } = props
  const [ input, setInput ] = useState('')
  const [ error, setError ] = useState(false)

  const Action = () => {
    if (!isNaN(input)) {
      setCount(parseInt(input))
      setError(false)
    } else {
      setError(true)
    }
  }
  return (
    <p>
      <input type="text" onChange={e => setInput(e.target.value)}/>
      <button onClick={() => Action()}>Set</button>
      {error && <Error />}
    </p>
  )
}

// register form 
// (first name (only alphabetical), last name (only alphabetical), double-time password 
// d.o.b (input + calendar, no longer than today, yyyy/mm/dd), address, email (correct format), phone number) 
// (all required (except for phone number), red asterisk of label, red error of empty, wrong format)
// phone number no longer than 12 characters, only number
// password field contains show password toggle
// submit button (disabled if wrong condition), clear button

//* re-usable field component


function Error() {
  return (
    <div style={{ color: 'red' }}>Not a number!</div>
  )
}

export default ParentFnc