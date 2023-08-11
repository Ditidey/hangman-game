import React from 'react';
import './Drawing.css';

const Head = (
    <div className='head'></div>
)
const Body = (
    <div className='body-con'></div>
)
const RightArm = (
    <div className='right-arm'></div>
)
const bodyPart = [];

const HangmanDrawing = () => {
    return (
        <div className='body'>
             {Head}
             {Body}
             {RightArm}
            {/* for hanger */}
            <div style={{width: '10px', height:'80px', marginLeft:'260px', position:'absolute', top:0, background: 'black'}}></div>
            <div style={{width: '150px', height:'10px', marginLeft:'120px', background: 'blue'}}></div>
            <div style={{width: '10px', height:'400px', marginLeft:'120px', background: 'green'}}></div>
            <div style={{width: '250px', height:'10px', background: 'black'}}></div>
        </div>
    );
};

export default HangmanDrawing;