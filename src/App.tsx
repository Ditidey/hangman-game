import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import HangmanDrawing from './components/HandmanDrawing/HangmanDrawing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div className='body-con'>
            <Nav></Nav>
            <div>
              <h2>win lose</h2>
            </div>
            <HangmanDrawing></HangmanDrawing>
      </div>
    </div>
  )
}

export default App
