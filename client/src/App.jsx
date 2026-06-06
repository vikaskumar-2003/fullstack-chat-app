import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Login from './pages/authentication/Login'

function App() {
  const [count, setCount] = useState(0)

  const state = useSelector(state => state.useSlice)
  const dispatch=useDispatch()
  console.log(state);
  
 

  return (
    <>
      {/* <h1>He</h1>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-error">Error</button> */}
      
    </>
  )
}

export default App
