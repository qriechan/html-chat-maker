import React from 'react'
import { useState } from 'react'
import { imageURLs } from './ImageURLs';
import stickerIDs from './StickerIDs';

function Export({ messages, chatName, chatDesc, imageURLs }) {

    const [exportedHTML, setExportedHTML] = useState('');
    const getStickerURL = (stickerId) => {
        const sticker = stickerIDs.find(s => s.stickerId === stickerId);
        return sticker ? sticker.stickerURL : '';
    };

    const generateMessageHTML = (message) => {
        const { contactName, textValue, statusType, messageType } = message;
        const iconRef = contactName.replace(/ /g, '_');
        const iconURL = imageURLs[`${iconRef}_Icon`] || '';
        const isPictureMessage = messageType === 'picture';
        const isStickerMessage = messageType === 'sticker';
        const stickerURL = isStickerMessage ? getStickerURL(textValue) : '';

        const backgroundStyle = isPictureMessage
        ? `background-image: url('${textValue}'); background-size: cover; background-position: center;`
        : isStickerMessage
        ? `background-image: url('${stickerURL}'); background-size: contain; background-position: center; background-repeat: no-repeat;`
        : '';

        if (statusType === 'receive') {
            return `
            <table class='fulltext'>
                <tbody>
                    <tr class='msg-row'>
                        <td rowspan='2' class='td-icon'>
                            <img class='hsricon' src='${iconURL}' width='100%' alt='${contactName}' />
                        </td>
                        <td class='L-contact'>${contactName}</td>
                    </tr>
                    <tr class='msg-row'>
                        <td ${messageType === 'text' ? `class="text"` : `class="hsr-${messageType}"`}  
                        ${backgroundStyle ? `style="${backgroundStyle}"` : ''}>
                            ${(!isPictureMessage && !isStickerMessage) ? textValue : ''}</td>
                    </tr>
                </tbody>
            </table>
            `;
        } else if (statusType === 'send') {
            return `
            <table class='fullreply'>
                <tbody>
                    <tr class='msg-row'>
                        <td class='R-contact'>${contactName}</td>
                        <td rowspan='2' class='td-icon'>
                            <img class='hsricon' src='${iconURL}' width='100%' alt='${contactName}' />
                        </td>
                    </tr>
                    <tr class='msg-row'>
                        <td ${messageType === 'text' ? `class="reply"` : `class="hsr-${messageType}"`} 
                        ${backgroundStyle ? `style="${backgroundStyle}"` : ''}>
                            ${(!isPictureMessage && !isStickerMessage) ? textValue : ''}</td>
                    </tr>
                </tbody>
            </table>
            `;
        } else if (statusType === 'action') {
            return `
            <table class="fullalert">
                <tr class="msg-row">
                    <td class="alert-display"><img class="alert-icon" src="https://i.postimg.cc/9FN4jFcm/IMG-3971.png" width="100%" alt="Action" /></td>
                    <td class="alert">${textValue}</td>
                </tr>
            </table>
            `;
        }
        return '';
    };

    const generateFullHTML = () => {
        const chatHeader = `
        <div class='header'>
            <p class='main-contact'>${chatName}</p>
            <p class='bio'>${chatDesc}</p>
        </div>
        `;
        
        const messagesHTML = messages.map(generateMessageHTML).join('');
        
        const fullHTML = `
        <div class='phone'>
            ${chatHeader}
            ${messagesHTML}
        </div>
        `;

        setExportedHTML(fullHTML);

        const copyToClipboard = (fullHTML) => {
            navigator.clipboard.writeText(fullHTML)
                .then(() => {
                    alert("Copied HTML to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                });
        };
        copyToClipboard(fullHTML);
    };

    return (  
        <div className='export-container'>
        <button className='exporter' onClick={generateFullHTML}>Export as HTML (preview code below)</button>
        <textarea
            readOnly
            value={exportedHTML}
        ></textarea>
        </div>
    )
}

export default Export