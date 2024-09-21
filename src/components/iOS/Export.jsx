import React from 'react'
import { useState } from 'react'

function Export({ messages, chatName, chatDesc, includeContact }) {

    const [exportedHTML, setExportedHTML] = useState('');

    const generateMessageHTML = (message) => {
        const { contactName, textValue, statusType, messageType } = message;
        const isPictureMessage = messageType === 'ios-picture';

        const backgroundStyle = isPictureMessage
        ? `background-image: url('${textValue}'); background-size: cover; background-position: center;`
        : '';

        if (statusType === 'receive') {
            return `
            <table class='full-text'>
                <tbody>
                    <tr>
                    <td class='sender-contact'>${includeContact === 'true' ? contactName : ''}</td>
                    </tr>
                    <tr class='msg-row'>
                            <td class='ios-text ios-${messageType}' 
                            ${backgroundStyle ? `style="${backgroundStyle}"` : ''}>
                                ${!isPictureMessage ? textValue : ''}</td>
                        </tr>
                </tbody>
            </table>
            `;
        } else if (statusType === 'send') {
            return `
            <table class='full-reply'>
                <tbody>
                    <tr class='msg-row'>
                            <td class='ios-reply ios-${messageType}' 
                            ${backgroundStyle ? `style="${backgroundStyle}"` : ''}>
                                ${!isPictureMessage ? textValue : ''}</td>
                        </tr>
                </tbody>
            </table>
            `;
        } else if (statusType === 'action') {
            return `
            <table class="fullalert">
                <tr class="msg-row">
                    <td class="alert">${textValue}</td>
                </tr>
            </table>
            `;
        }
        return '';
    };

    const generateFullHTML = () => {
        const chatHeader = `
        <div class='ios-header'>
            <p class='main-ios-contact'>${chatName}</p>
            <p class='ios-bio'>${chatDesc}</p>
        </div>
        `;
        
        const messagesHTML = messages.map(generateMessageHTML).join('');
        
        const fullHTML = `
        <div class='ios-phone'>
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
        <div class='export-container'>
        <button class='exporter' onClick={generateFullHTML}>Export as HTML (preview code below)</button>
        <textarea
            readOnly
            value={exportedHTML}
        ></textarea>
        </div>
    )
}

export default Export