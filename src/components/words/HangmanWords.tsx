import React from 'react';
import './Word.css';

type WordsProps = {
    typeWord: string[],
    wordToGuess: string
    reavel?:boolean
}
const HangmanWords = ({typeWord, wordToGuess, reavel=false}: WordsProps) => {
//    console.log(wordToGuess)
let words = 'access'
    return (
        <div className='word-div'>
            {
               wordToGuess.split('').map((le, i)=><div key={i} className='letter-div'>
                   <span style={{
                    visibility:  typeWord.includes(le) || reavel ? 'visible' : 'hidden',
                    color: !typeWord.includes(le) && reavel ? 'red' : 'black'                   
                    }}>
                        {le}
                   </span>
               </div>)              
            }
        </div>
    );
};

export default HangmanWords;