import React from 'react';
import './About.css';

type aboutProps = {
    modalOpen: (isOpen: boolean)=> void
}
const About = ({modalOpen}:aboutProps) => {
    return (
        <div className='about-con'>
             <button onClick={()=>modalOpen(false)} style={{backgroundColor:'red', color:'white'}}>X</button>
            <div style={{padding:'10px'}}>
                <p>Hangman is a classic word-guessing game that involves some random words, player will attempt to guess the word by 12 letters at a game</p>
                <ul>
                    <li><span style={{ fontWeight: 'bold' }}>Guessing Letters:</span>!You can guess 12 tries.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Correct Guess: </span> If the guessed letter is in the word, it will sit it place and show a figure</li>
                    <li><span style={{ fontWeight: 'bold' }}>Incorrect Guess: </span> If the guessed letter is not in the word, it will not show figure.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Limited Guesses: </span> The guesser has a limited number of guesses (often represented by the number of body parts of the hangman figure). This number can vary, but it's commonly around 6-8 incorrect guesses.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Winning: </span>Winning:  If they successfully guess all the letters in the word before the entire hangman figure is drawn. Got 2 score for each win.
                    </li>
                    <li><span style={{ fontWeight: 'bold' }}> Losing:</span> You can try again.</li>                  
                </ul>
            </div>
        </div>
    );
};

export default About;