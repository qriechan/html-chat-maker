import React from 'react'

function SenderMessage({ contact , text }) {

    const iconRef = contact.replace(/ /g, '_');

    const imagePath = './Images/Character_${iconRef}_Icon.webp'

    return (
        <>
        <table className='full-message full-text'>
            <tbody>
                <tr>
                    <td rowSpan='2' className='container-icon'>
                        <img 
                            className='icon' 
                            src={imagePath} 
                            width='100%'
                            alt={contact} />
                        </td>
                    <td className='sender-contact message-contact'>{contact}</td>
                </tr>
                <tr>
                    <td className='sender text'>{text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage