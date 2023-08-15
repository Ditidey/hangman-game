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
                    <li><span style={{ fontWeight: 'bold' }}>Guessing Letters:</span>!You can guess 7 letters.</li>
                
                    <li><span style={{ fontWeight: 'bold' }}>Incorrect Guess: </span> If the guessed letter is not in the word, it will show a figure.</li>
                     
                    <li><span style={{ fontWeight: 'bold' }}>Winning: </span>If you successfully guess all the letters in the word before the entire hangman figure is drawn. Got 1 score for each win.
                    </li>
                    <li><span style={{ fontWeight: 'bold' }}> Losing:</span>If you show all parts of the body, you are a loser. You can try again.</li>                  
                </ul>
            </div>
        </div>
    );
};

export default About;