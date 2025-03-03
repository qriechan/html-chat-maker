import React, { useEffect, useRef, useState } from 'react'
import WorkskinHSR from './HSR/Workskin-HSR'
import WorkskinIOS from './iOS/Workskin-iOS';
import WorkskinKKT from './KKT/Workskin-KKT';

function Workskin() {
    
    // create references for each workskin 
    const iosRef = useRef(null);
    const hsrRef = useRef(null);
    const kktRef = useRef(null); 

    // store the actual text content
    const [iosFullText, setIosFullText] = useState('');
    const [hsrFullText, setHsrFullText] = useState('');
    const [kktFullText, setKktFullText] = useState('');

    useEffect(() => {

        // use dependency array 
        const fetchText = (file, setter) => {
            fetch(file)
                .then(response => response.text())
                .then(text => setter(text))
                .catch(err => console.error(`Failed to load ${file}:`, err));
        };
    
        fetchText('/Workskin-iOS.txt', setIosFullText);
        fetchText('/Workskin-HSR.txt', setHsrFullText);
        fetchText('/Workskin-KKT.txt', setKktFullText);

    }, []);
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("Copied workskin to clipboard!"))
            .catch(err => console.error("Failed to copy: ", err));
    };

    // useEffect(() => {

    //     fetch('/public/Workskin-iOS.txt')
    //         .then(response => response.text())
    //         .then(text => setIosFullText(text))
    //         .catch(err => console.error("Failed to load iOS workskin:", err));

    //     fetch('/public/Workskin-HSR.txt')
    //         .then(response => response.text())
    //         .then(text => setHsrFullText(text))
    //         .catch(err => console.error("Failed to load HSR workskin:", err));

    //     fetch('/public/Workskin-KKT.txt')
    //         .then(response => response.text())
    //         .then(text => setKktFullText(text))
    //         .catch(err => console.error("Failed to load KKT workskin:", err));

    // })

    // const copyToClipboard = (ref) => {
    //     if (ref.current) {
    //         const textToCopy = ref.current.innerText; 
    //         navigator.clipboard.writeText(textToCopy) 
    //             .then(() => {
    //                 alert("Copied workskin to clipboard!");
    //             })
    //             .catch(err => {
    //                 console.error("Failed to copy: ", err);
    //             });
    //     }
    // };

    return (
    <div className='all-workskins'>
        <div className='workskin-container'>
            <WorkskinIOS 
            textRef={iosRef} />
            <button className='copy-workskin' 
                onClick={() => copyToClipboard(iosFullText)}>
                Copy iOS CSS
            </button>
        </div>
        <div className='workskin-container'>
            <WorkskinHSR 
            textRef={hsrRef} />
            <button className='copy-workskin' 
                onClick={() => copyToClipboard(hsrFullText)}>
                Copy HSR CSS
            </button>
        </div>
        <div className='workskin-container'>
            <WorkskinKKT 
            textRef={kktRef} />
            <button className='copy-workskin' 
                onClick={() => copyToClipboard(kktFullText)}>
                Copy KKT CSS
            </button>
        </div>
    </div>
    )
}

export default Workskin