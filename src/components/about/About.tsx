import React from 'react';
import './About.css';

type aboutProps = {
    modalOpen: (isOpen: boolean)=> void
}
const About = ({modalOpen}:aboutProps) => {
    return (
        <div className='about-con'>
             <button onClick={()=>modalOpen(false)} style={{backgroundColor:'red', color:'white'}}>X</button>
            <div>
                <p>Hangman is a classic word-guessing game that involves some random words, player will attempt to guess the word one letter at a time</p>
                <ul>
                    <li><span style={{ fontWeight: 'bold' }}>Guessing Letters:</span>  The guesser starts by guessing a single letter that they believe might be in the chosen word. The guesser can only guess one letter at a time.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Correct Guess: </span> If the guessed letter is in the word, the chooser reveals all occurrences of that letter in the word. The letter is placed in the appropriate positions, replacing the underscores.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Incorrect Guess: </span> If the guessed letter is not in the word, the chooser may begin to draw a "hangman" figure (typically using a series of lines and shapes). The exact representation of the hangman can vary, but it usually includes elements like a gallows, a head, a body, arms, and legs.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Limited Guesses: </span> The guesser has a limited number of guesses (often represented by the number of body parts of the hangman figure). This number can vary, but it's commonly around 6-8 incorrect guesses.</li>
                    <li><span style={{ fontWeight: 'bold' }}>Winning: </span>Winning: The guesser wins the game if they successfully guess all the letters in the word before the entire hangman figure is drawn. This means they correctly identify the word based on the revealed letters.
                    </li>
                    <li><span style={{ fontWeight: 'bold' }}> Losing:</span>

                        The chooser wins if the hangman figure is completely drawn before the guesser guesses all the letters in the word. In this case, the guesser has "hung" the man, and they lose the game. </li>
                    <li><span style={{ fontWeight: 'bold' }}>  End of Game:</span>

                        The game ends either when the guesser wins by correctly guessing the word or when the chooser wins by completing the hangman figure.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;