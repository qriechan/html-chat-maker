import React from 'react'

function SenderMessage({ contact, text, messageClass, includeContact, showContactName, sameSenderAndStatus, isLastInSequence }) {

    const isPictureMessage = messageClass === 'ios-picture';
    const messageMargin = {
        marginTop: sameSenderAndStatus ? '-.75rem' : '.5rem' 
    };
    const messageClassName = `ios-text ios-${messageClass} ${!isLastInSequence ? 'no-after' : ''}`;
    
    let backgroundStyle = {};
    if (isPictureMessage) {
        backgroundStyle = { backgroundImage: `url(${text})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }

    return (
        <>
        <table className='full-message full-ios-reply' style={messageMargin}>
            <tbody>
            {includeContact && showContactName && !sameSenderAndStatus && (
                <tr>
                <td className='receiver-contact message-contact'>{contact}</td>
                </tr>
            )}
                <tr>
                    <td className={messageClassName} style={backgroundStyle}>
                    {!isPictureMessage && text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage