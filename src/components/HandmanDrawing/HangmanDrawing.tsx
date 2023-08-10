import React from 'react';
import './Drawing.css';

const HangmanDrawing = () => {
    return (
        <div className='body'>
            {/* for hanger */}
            <div style={{width: '10px', height:'100px', top:0, right: 0, position: 'absolute' ,background: 'black'}}></div>
            <div style={{width: '150px', height:'10px', marginLeft:'120px', background: 'blue'}}></div>
            <div style={{width: '10px', height:'400px', marginLeft:'120px', background: 'green'}}></div>
            <div style={{width: '250px', height:'10px', background: 'black'}}></div>
        </div>
    );
};

export default HangmanDrawing;