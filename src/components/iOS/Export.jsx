import React from 'react'
import { useState } from 'react'

function Export({ messages, chatName, chatDesc, includeContact }) {

    const [exportedHTML, setExportedHTML] = useState('');

    const generateMessageHTML = (message, index) => {
        const { contactName, textValue, statusType, messageType } = message;
        const isPictureMessage = messageType === 'ios-picture';
        const backgroundStyle = isPictureMessage
        ? `background-image: url('${textValue}'); background-size: cover; background-position: center; height: 9.375rem; max-width: 75%; width: 20rem; border-radius: 1rem;`
        : '';

        const previousMessage = index > 0 ? messages[index - 1] : null;
        const nextMessage = index < messages.length - 1 ? messages[index + 1] : null;
        const sameSenderAndStatus = previousMessage &&
            message.contactName === previousMessage.contactName &&
            message.statusType === previousMessage.statusType;
        const isLastInSequence = !nextMessage || 
            message.contactName !== nextMessage.contactName || 
            message.statusType !== nextMessage.statusType;
        const messageClassName = `ios-text ios-${messageType} ${!isLastInSequence ? 'no-after' : ''}`;
        const showContactName = index === 0 || message.contactName !== previousMessage?.contactName;

        if (statusType === 'receive') {
            return `
            <table class='full-text' style="margin-top: ${sameSenderAndStatus ? '-.5rem' : '.5rem'}">
                <tbody>
                    ${includeContact === true && showContactName ? `
                    <tr>
                        <td class='sender-contact'>${contactName}</td>
                    </tr>` : ''}
                    <tr class='msg-row'>
                            <td class='${messageClassName}' 
                            ${backgroundStyle ? `style="${backgroundStyle}"` : ''}>
                                ${!isPictureMessage ? textValue : ''}</td>
                        </tr>
                </tbody>
            </table>
            `;
        } else if (statusType === 'send') {
            return `
            <table class='full-reply' style="margin-top: ${sameSenderAndStatus ? '-.5rem' : '.5rem'}">
                <tbody>
                    ${includeContact === true && showContactName ? `
                    <tr>
                        <td class='receiver-contact'>${contactName}</td>
                    </tr>` : ''}
                    <tr class='msg-row'>
                            <td class='${messageClassName}' 
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