import React from 'react'

function SenderMessage({ contact, icon, text, messageClass, sameSenderAndStatus }) {
    const isPictureMessage = messageClass === 'kkt-picture';

    const messageMargin = {
        marginTop: sameSenderAndStatus ? '-.75rem' : '.5rem',
        marginRight: sameSenderAndStatus ? '3.5rem' : '',
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
        <table className='full-message full-kkt-reply' style={messageMargin}>
            <tbody>
                <tr>
                {!sameSenderAndStatus && (<td className='receiver-contact message-contact'>{contact}</td>)}
                {!sameSenderAndStatus && (<td rowSpan='2' className='kkt-icon'>
                    <img 
                        className='icon' 
                        src={icon} 
                        width='100%'
                        alt={contact} />
                </td>)}
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