import React, { useRef } from 'react'
import WorkskinHSR from './HSR/Workskin-HSR'
import WorkskinIOS from './iOS/Workskin-iOS';
import WorkskinKKT from './KKT/Workskin-KKT';

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
    <div className='all-workskins'>
        <div className='workskin-container'>
            <WorkskinIOS 
            textRef={textRef} />
            <button className='copy-workskin' onClick={copyToClipboard}>Copy iOS CSS</button>
        </div>
        <div className='workskin-container'>
            <WorkskinHSR 
            textRef={textRef} />
            <button className='copy-workskin' onClick={copyToClipboard}>Copy HSR CSS</button>
        </div>
        <div className='workskin-container'>
            <WorkskinKKT 
            textRef={textRef} />
            <button className='copy-workskin' onClick={copyToClipboard}>Copy KKT CSS</button>
        </div>
    </div>
    )
}

export default Workskin