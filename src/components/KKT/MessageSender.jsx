import React from 'react'

function SenderMessage({ contact, text, messageClass, sameSenderAndStatus, isLastInSequence }) {

    const iconURL = 'https://i.postimg.cc/7h3JQKVT/Character-Acheron-Icon.webp'
    const isPictureMessage = messageClass === 'kkt-picture';
    const messageMargin = {
        marginTop: sameSenderAndStatus ? '-.75rem' : '.5rem' 
    };
    const messageClassName = `kkt-text kkt-${messageClass} ${!isLastInSequence ? 'no-after' : ''}`;
    
    let backgroundStyle = {};
    if (isPictureMessage) {
        backgroundStyle = { backgroundImage: `url(${text})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }

    console.log(isLastInSequence)

    return (
        <>
        <table className='full-message full-kkt-text' style={messageMargin}>
            <tbody>
            <tr>
                <td rowSpan='2' className='kkt-icon'>
                <img 
                    className='icon' 
                    src={iconURL} 
                    width='100%'
                    alt={contact} />
                </td>
                <td className='sender-contact message-contact'>{contact}</td>
            </tr>
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