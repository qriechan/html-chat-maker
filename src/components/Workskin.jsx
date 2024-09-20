import React, { useRef } from 'react'
import WorkskinHSR from './HSR/Workskin-HSR'

function Workskin() {
    const textRef = useRef(null); // Create a ref for the div

    const copyToClipboard = () => {
        if (textRef.current) {
            const textToCopy = textRef.current.innerText; // Get the text from the div
            navigator.clipboard.writeText(textToCopy) // Copy to clipboard
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
    </>
    )
}

export default Workskin