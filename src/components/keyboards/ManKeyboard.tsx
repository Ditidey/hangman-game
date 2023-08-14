import React from 'react';
import './ManKeyboard.css';

const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

type keyboardProps = {
    addTypeWords: (key: string) => void
    activeLetter: string[]
    inactiveLetter: string[]
    disabled?: boolean
}
const ManKeyboard = ({ addTypeWords, activeLetter, inactiveLetter, disabled = false}: keyboardProps) => {

    return (
        <div className='keyboard-con'>
            {
                keys.map((key, i) => {
                    const isAct = activeLetter.includes(key)
                    const isInact = inactiveLetter.includes(key)
                    return (
                        < button key={i}
                        disabled={isAct || isInact || disabled}
                            onClick={() => addTypeWords(key)}
                            className={`key-btn ${isAct ?  'active' : ''} ${isInact ? 'inactive' : ''}`}>
                            {key}
                        </button>
                    )
                }

                )
            }
        </div >
    );
};

export default ManKeyboard;