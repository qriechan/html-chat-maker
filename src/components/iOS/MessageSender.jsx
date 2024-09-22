import React from 'react'

function SenderMessage({ contact ,text, messageClass, includeContact, showContactName, sameSenderAndStatus }) {

    const isPictureMessage = messageClass === 'ios-picture';
    const messageMargin = {
        marginTop: sameSenderAndStatus ? '-.75rem' : '.5rem' 
    };
    
    let backgroundStyle = {};
    if (isPictureMessage) {
        backgroundStyle = { backgroundImage: `url(${text})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }

    return (
        <>
        <table className='full-message full-ios-text' style={messageMargin}>
            <tbody>
            {includeContact && showContactName && !sameSenderAndStatus && (
                <tr>
                <td className='sender-contact message-contact'>{contact}</td>
                </tr>
            )}
                <tr>
                    <td className={`ios-text ios-${messageClass}`} style={backgroundStyle}>
                    {!isPictureMessage && text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage