import React from 'react';
import './Drawing.css';

const Head = (
    <div className='head'>
        <div style={{display:'flex', gap:'.25rem', padding:'12px'}}>
        <div style={{backgroundColor:'red', height:'10px', width:'10px', borderRadius: '100%'}}></div>
        <div style={{backgroundColor:'red', height:'10px', width:'10px', borderRadius: '100%'}}></div>
        </div>
        <div style={{backgroundColor:'olive', height:'7px', width:'22px', borderRadius: '100%', marginLeft:'15px', marginBottom:'8px'}}></div>
    </div>
)
const Body = (
    <div className='body-con'></div>
)
const RightArm = (
    <div className='right-arm'></div>
)
const LeftArm = (
    <div className='left-arm'></div>
)
const RightLeg = (
    <div className='right-leg'></div>
)
const LeftLeg = (
    <div className='left-leg'></div>
)
const bodyPart = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type DrawingProps = {
    numOfGuess: number
}
const HangmanDrawing = ({numOfGuess}: DrawingProps) => {
    return (
        <div className='body'>
            {bodyPart.slice(0, numOfGuess)}
            {/* for hanger */}
            <div style={{width: '10px', height:'50px', marginLeft:'220px', position:'absolute', top:0, background: 'black'}}></div>
            <div style={{width: '150px', height:'10px', marginLeft:'70px', background: 'blue'}}></div>
            <div style={{width: '10px', height:'290px', marginLeft:'70px', background: 'green'}}></div>
            <div className='base' ></div>
        </div>
    );
};

export default HangmanDrawing;