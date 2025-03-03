import React, { useEffect, useState } from 'react'

function WorkskinKKT({ textRef }) {
    const [textContent, setTextContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        // fetch txt file 
        fetch('/Workskin-KKT.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Bad network response');
                }
                return response.text();
            })
            .then(text => {
                setTextContent(text);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error loading CSS workskin:', error);
                setError('Failed to load workskin');
                setIsLoading(false);
            });
    }, []);

    const renderTextContent = () => {

        // catch special cases 
        if (isLoading) return <p className='tiny'>Loading...</p>
        if (error) return <p className='tiny'>{error}</p>

        // normal case
        return textContent.split('\n').map((line, index) => (
            <p className='tiny' key={index}>
                {line}
            </p>
        ))
    }

    return (
        <div className='code-box'>
            <h3>KKT Message Workskin</h3>
            <div className='workskin-box' ref={textRef}> 
                {renderTextContent()}
            </div>
        </div>
    )
}

export default WorkskinKKT