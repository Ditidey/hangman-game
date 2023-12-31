import { useCallback, useEffect, useState } from 'react'
import './App.css'
import HangmanDrawing from './components/HandmanDrawing/HangmanDrawing'
import HangmanWords from './components/words/HangmanWords';
import words from '../public/wordList.json';
import ManKeyboard from './components/keyboards/ManKeyboard'
import About from './components/about/About';
import img from '../public/images.jpg'

function makeNewWord() {
  return words[Math.floor(Math.random() * words.length)]
}
function App() {
  // passing props for words
  const [wordToGuess, setWordToGuess] = useState(makeNewWord)
  const [typeWord, setTypeWord] = useState<string[]>([])
  // passing props in drawing component
  const wrongGuess = typeWord.filter(le => !wordToGuess.includes(le))
  const correctGuess = typeWord.filter(le => wordToGuess.includes(le))

  // showing winner or loser
  const isLoser = wrongGuess.length >= 6;
  const isWinner = wordToGuess.split('').every(le => typeWord.includes(le))

  const addTypeWords = useCallback((key: string) => {
    if (typeWord.includes(key) || isLoser || isWinner) {
      return
    }

    setTypeWord(curLetter => [...curLetter, key])
  }, [typeWord, isLoser, isWinner])


  // eventlistener for keyboard
  useEffect(() => {
    const keyController = (event: KeyboardEvent) => {
      // console.log('hi')
      const key = event.key
      // console.log(key)
      if (!key.match(/^[a-z]$/) || key !== 'Enter') return

      event.preventDefault()
      addTypeWords(key)
      // setTypeWord([])
      // setWordToGuess(makeNewWord())
    }

    document.addEventListener('keypress', keyController)

    return () => {
      document.removeEventListener('keypress', keyController)
    }
  }, [typeWord])
  // for pressing try again and get a new word
  const tryAgain = () => {
    setTypeWord([])
    setWordToGuess(makeNewWord())
  }
  useEffect(() => {
    const keyController = (event: KeyboardEvent) => {
      // console.log('hi')
      const key = event.key
      console.log(key)
      if (key !== 'Enter') return

      event.preventDefault()
      setTypeWord([])
      setWordToGuess(makeNewWord())
    }

    document.addEventListener('keypress', keyController)

    return () => {
      document.removeEventListener('keypress', keyController)
    }
  }, [typeWord])

  // opening about modal
  const [open, setOpen] = useState(false)
   
  // for showing score
  let getScore = localStorage.getItem('score');
  console.log('get', getScore)
  if (getScore === null) {
    getScore = '0';
  }
  let score = parseInt(getScore, 10);
  if (isWinner) {
    score = score + 1
    localStorage.setItem('score', JSON.stringify(score))
    console.log(score)
  }
  
  return (
    <div className=''  >
      <div className='nav-con'>
        <img src={img} alt="" style={{ width: '35px', height: '35px', borderRadius: '100%', marginTop: '25px', marginRight: '5px' }} />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Guess your words</h2>
      </div>
      {/* for showing details and score */}
      <div className='detail-div'>
        <p onClick={() => setOpen(!open)} style={{ color: 'blue', fontSize: '1.2rem', marginLeft:'8px'}}>See details of the game</p>
        <div style={{ marginTop: '18px', marginLeft: '18px' }}>
          <button style={{padding:'3px'}}>Your Score </button><button style={{padding:'3px'}}>  {score || 0}  </button>
          <br />
          {/* <button>Games</button><button>{game || '0'}</button> */}
        
          <button onClick={tryAgain} style={{ padding: '4px', margin: '6px', backgroundColor: 'rebeccapurple', color: 'whitesmoke' }}>{isLoser ? 'Try Again' : 'New Game'}</button>
        </div>
      </div>
      <hr style={{marginTop:'10px'}}/>

      {
        open == true && <About modalOpen={setOpen}></About>
      }
      <div className={``} onClick={() => setOpen(false)} >
        <div className='toast'>
          {isWinner && <h2 style={{color:'green'}}>Wow! You crack the word. You can play again</h2>}
          {isLoser && <h2 style={{color:'red'}}>Sorry! Wrong guess. You can try again.</h2>}
        </div>
        <HangmanDrawing numOfGuess={wrongGuess.length}></HangmanDrawing>
        <HangmanWords typeWord={typeWord} wordToGuess={wordToGuess} reavel={isLoser}></HangmanWords>

        <div style={{ alignSelf: 'stretch' }}>
          <ManKeyboard
            disabled={isWinner || isLoser}
            addTypeWords={addTypeWords}
            activeLetter={wrongGuess}
            inactiveLetter={correctGuess}
          ></ManKeyboard>
        </div>
      </div>
      <hr />
      <div className='foot'>
        <p style={{ fontWeight: 'bold' }} >Hangman Game</p>
        <p >Preserved by Diti Rani Dey <br /> & &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
