import React, { useState } from 'react'
import characterNames from './CharacterNames';

function PostText(props){

    const [textValue, setTextValue] = useState('');
    const [contactName, setContactName] = useState('Unknown');
    const [statusType, setStatusType] = useState('send');
    const [messageType, setMessageType] = useState('text');
    const inputPlaceholder = messageType === 'picture' ? 'Paste image URL' : 'Enter text here...';

    const messageStatus = [
        {value: "receive", label: "Receive"},
        {value: "send", label: "Send"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageDetails = { textValue, contactName, statusType, messageType };
        console.log(messageDetails);
        props.onSubmit(messageDetails);
        setTextValue('');
    };

    return (
        <div className='write-text'>
            <form onSubmit={handleSubmit}>
                <select value={contactName} onChange={(e) => setContactName(e.target.value)} required>
                    {characterNames.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <input 
                    type="text" 
                    required
                    value={textValue} 
                    onChange={(e) => setTextValue(e.target.value)} 
                    placeholder={inputPlaceholder}
                />
                <button type='submit' className='text-send'>Send</button>
                <div className='radio'>
                </div>
                {messageStatus.map((x, i) => <span>
                    <input 
                        type="radio"
                        name="status"
                        value={x.value}
                        onChange={(e) => setStatusType(e.target.value)}
                        required
                    /> 
                    <label key={i}>{x.label}</label>
                    </span>
                )}
                <div className="message-type-selector">
                    <label>
                        <input 
                            type="radio" 
                            value="text" 
                            checked={messageType === 'text'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                        />
                        Text
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="sticker" 
                            checked={messageType === 'sticker'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                        />
                        Sticker
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="picture" 
                            checked={messageType === 'picture'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                        />
                        Picture
                    </label>
                </div>
            </form>
        </div>
    )
}

export default PostText