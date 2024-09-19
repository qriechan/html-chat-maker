import React from 'react'

function SenderMessage({ contact , text }) {

    const iconRef = contact.replace(/ /g, '_');

    const imagePath = '/Images/Character_${iconRef}_Icon.webp'

    return (
        <>
        <table className='full-message full-reply'>
            <tbody>
                <tr>
                    <td className='receiver-contact message-contact'>{contact}</td>
                    <td rowSpan='2' className='container-icon'>
                    <img 
                        className='icon' 
                        src={imagePath} 
                        width='100%'
                        alt={contact} />
                    </td>
                </tr>
                <tr>
                    <td className='receiver text'>{text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage