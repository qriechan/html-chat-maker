import React from 'react'

function SenderMessage({ contact , text }) {
    return (
        <div className='full-message full-text'>
            <img 
                className='icon' 
                // add img srcs tmrw 
                src={getImageURL(contact)} 
                width="100%" 
                alt={contact} />
            <div className='message-content'>
                <div className='sender-contact message-contact'>
                    <p>{contact}</p>
                </div>
                <div className='sender text'>{text}</div>
            </div>
        </div>
    )
}

export default SenderMessage