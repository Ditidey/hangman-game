import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import HangmanDrawing from './components/HandmanDrawing/HangmanDrawing'
import HangmanWords from './components/words/HangmanWords';
import words from '../public/wordList.json';
import ManKeyboard from './components/keyboards/ManKeyboard'

function makeNewWord(){
  return words[Math.floor(Math.random() * words.length)]
}
function App() {
  // passing props for words
  const [wordToGuess, setWordToGuess] = useState(makeNewWord)
  const [typeWord, setTypeWord] = useState<string[]>([])
// passing props in drawing component
const correctGuess = typeWord.filter(le => wordToGuess.includes(le))
const wrongGuess = typeWord.filter(le=> !wordToGuess.includes(le))

// showing winner or loser
const isLoser = wrongGuess.length >= 10;
const isWinner = wordToGuess.split('').every(le => typeWord.includes(le))

  const addTypeWords = useCallback((key: string) => {
    console.log('hi from add function')
    if (typeWord.includes(key) || isLoser || isWinner) {
      return
    }

    setTypeWord(curLetter => [...curLetter, key])
  }, [typeWord, isLoser, isWinner])
 
   
  // eventlistener for keyboard
  useEffect(() => {
    const keyController = (event: KeyboardEvent) => {
      console.log('hi')
      const key = event.key
      console.log(key)
      if (!key.match(/^[a-z]$/)) return

      event.preventDefault()
      addTypeWords(key)
    }

    document.addEventListener('keypress', keyController)

    return () => {
      document.removeEventListener('keypress', keyController)
    }
  }, [typeWord])
  // for pressing enter button and get a new word
  useEffect(() => {
    const keyController = (event: KeyboardEvent) => {
      console.log('hi')
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
  return (
    <div className=''>
      <div className=''>
        <h2>Guess your words</h2>
        <div className='toast'>
           {isWinner && 'Wow! You crack the word. You can play again'}
           {isLoser && 'Sorry! Wrong guess. You can try again'}
        </div>
        <HangmanDrawing numOfGuess={correctGuess.length}></HangmanDrawing>
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
    </div>
  )
}

export default App
