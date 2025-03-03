import React, { useRef } from 'react'
import WorkskinHSR from './HSR/Workskin-HSR'
import WorkskinIOS from './iOS/Workskin-iOS';
import WorkskinKKT from './KKT/Workskin-KKT';

function Workskin() {
    
    const iosRef = useRef(null);
    const hsrRef = useRef(null);
    const kktRef = useRef(null); 

    const copyToClipboard = (ref) => {
        if (ref.current) {
            const textToCopy = ref.current.innerText; 
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
            <button className='copy-workskin' 
                onClick={() => copyToClipboard(iosRef)}>
                Copy iOS CSS
            </button>
        </div>
        <div className='workskin-container'>
            <WorkskinHSR 
            textRef={textRef} />
            <button className='copy-workskin' 
                onClick={() => copyToClipboard(hsrRef)}>
                Copy HSR CSS
            </button>
        </div>
        <div className='workskin-container'>
            <WorkskinKKT 
            textRef={textRef} />
            <button className='copy-workskin' 
                onClick={() => copyToClipboard(kktRef)}>
                Copy KKT CSS
            </button>
        </div>
    </div>
    )
}

export default Workskin