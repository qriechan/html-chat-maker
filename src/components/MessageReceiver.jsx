import React from 'react'

function SenderMessage({ contact , text }) {

    const iconRef = contact.replace(/ /g, '_');

    const imagePath = `/Images/Character_${iconRef}_Icon.webp`

    return (
        <div className='full-message full-reply'>
            <img 
                className='icon' 
                src={imagePath} 
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