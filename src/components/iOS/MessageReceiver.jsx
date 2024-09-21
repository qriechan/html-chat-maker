import React from 'react'

function SenderMessage({ contact , text, messageClass }) {

    const isPictureMessage = messageClass === 'picture';
    
    let backgroundStyle = {};
    if (isPictureMessage) {
        backgroundStyle = { backgroundImage: `url(${text})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }

    return (
        <>
        <table className='full-message full-ios-reply'>
            <tbody>
                <tr>
                    <td className='receiver-contact message-contact'>{contact}</td>
                </tr>
                <tr>
                    <td className={`ios-reply ${messageClass}`} style={backgroundStyle}>
                    {!isPictureMessage && text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage