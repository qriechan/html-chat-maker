import React from 'react'
import './Images'

function SenderMessage({ contact , text }) {

    const iconRef = contact.replace(/ /g, '_');
    const iconKey = `${iconRef}_Icon`;
    const iconURL = imageURLs[iconKey] || 'https://i.postimg.cc/xdGSdCQH/Character-Unknown-Icon.webp';

    return (
        <>
        <table className='full-message full-reply'>
            <tbody>
                <tr>
                    <td className='receiver-contact message-contact'>{contact}</td>
                    <td rowSpan='2' className='container-icon'>
                    <img 
                        className='icon' 
                        src={iconURL} 
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