import React from 'react'
import { useState } from 'react'
import { imageURLs } from './ImageURLs';

function Export({ messages, chatName, chatDesc, imageURLs }) {

    const [exportedHTML, setExportedHTML] = useState('');

    const generateMessageHTML = (message) => {
        const { contactName, textValue, statusType } = message;
        const iconRef = contactName.replace(/ /g, '_');
        const iconURL = imageURLs[`${iconRef}_Icon`] || '';

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
                            <td class='text'>${textValue}</td>
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
                            <td class='reply'>${textValue}</td>
                        </tr>
                    </tbody>
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