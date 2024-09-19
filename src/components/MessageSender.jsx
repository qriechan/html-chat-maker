import React from 'react'
import './Images'

function SenderMessage({ contact , text, imageURLs }) {

    const iconRef = contact.replace(/ /g, '_');
    const iconKey = `${iconRef}_Icon`;
    const iconURL = imageURLs[iconKey] || 'https://i.postimg.cc/xdGSdCQH/Character-Unknown-Icon.webp';

    return (
        <>
        <table className='full-message full-text'>
            <tbody>
                <tr>
                    <td rowSpan='2' className='container-icon'>
                        <img 
                            className='icon' 
                            src={iconURL} 
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