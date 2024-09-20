import React from 'react'
import { imageURLs } from './ImageURLs';
import stickerIDs from './StickerIDs';

function SenderMessage({ contact , text, imageURLs, messageClass }) {

    const iconRef = contact.replace(/ /g, '_');
    const iconKey = `${iconRef}_Icon`;
    const iconURL = imageURLs[iconKey] || 'https://i.postimg.cc/xdGSdCQH/Character-Unknown-Icon.webp';
    const isPictureMessage = messageClass === 'picture';
    const isStickerMessage = messageClass === 'sticker';
    
    let backgroundStyle = {};
    if (isPictureMessage) {
        backgroundStyle = { backgroundImage: `url(${text})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    }
    if (isStickerMessage && text) {
        const sticker = stickerIDs.find(sticker => sticker.stickerId === text); 
        if (sticker) {
            backgroundStyle = { backgroundImage: `url(${sticker.stickerURL})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' };
        }
    }

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
                    <td className={`sender ${messageClass}`} style={backgroundStyle}>
                    {!isPictureMessage && !isStickerMessage && text}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default SenderMessage