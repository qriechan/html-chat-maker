import React, { useRef } from 'react'
import WorkskinHSR from './HSR/Workskin-HSR'
import WorkskinIOS from './iOS/Workskin-iOS';

function Workskin() {
    const textRef = useRef(null); 

    const copyToClipboard = () => {
        if (textRef.current) {
            const textToCopy = textRef.current.innerText; 
            navigator.clipboard.writeText(textToCopy) 
                .then(() => {
                    alert("Copied workskin to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                });
        }
    };

    return (
    <>
        <div className='workskin-container'>
            <WorkskinHSR 
            textRef={textRef} />
            <button className='copy-workskin' onClick={copyToClipboard}>Copy workskin CSS</button>
        </div>
        <div className='workskin-container'>
            <WorkskinIOS 
            textRef={textRef} />
            <button className='copy-workskin' onClick={copyToClipboard}>Copy workskin CSS</button>
            <p>Credits to CodenameCarrot and La_Temperanza for the CSS!</p>
        </div>
    </>
    )
}

export default Workskin