import React from 'react'

function SenderMessage({ contact, text, messageClass, sameSenderAndStatus }) {

    const iconURL = 'https://i.postimg.cc/7h3JQKVT/Character-Acheron-Icon.webp'
    const isPictureMessage = messageClass === 'kkt-picture';

    const messageMargin = {
        marginTop: sameSenderAndStatus ? '-.75rem' : '.5rem',
        marginLeft: sameSenderAndStatus ? '3.5rem' : '',
        width: sameSenderAndStatus ? '80%' : '100%',
    };
    const messageClassName = `kkt-text kkt-${messageClass}`;
    let backgroundStyle = {};
    if (isPictureMessage) {
        backgroundStyle = { backgroundImage: `url(${text})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }
    const changeMaxWidth = {
        maxWidth: sameSenderAndStatus ? '62.5%' : '60%',
    }

    return (
        <>
        <table className='full-message full-kkt-text' style={messageMargin}>
            <tbody>
            <tr>
                {!sameSenderAndStatus && (<td rowSpan='2' className='kkt-icon'>
                <img 
                    className='icon' 
                    src={iconURL} 
                    width='100%'
                    alt={contact} />
                </td>)}
                {!sameSenderAndStatus && (<td className='sender-contact message-contact'>{contact}</td>)}
            </tr>
                <tr>
                    <td className={messageClassName} style={Object.assign(backgroundStyle, changeMaxWidth)}>
                    {!isPictureMessage && text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage