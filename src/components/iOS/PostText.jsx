import React, { useState } from 'react'

function PostText(props){

    const [textValue, setTextValue] = useState('');
    const [contactName, setContactName] = useState('Unknown');
    const [statusType, setStatusType] = useState('send');
    const [messageType, setMessageType] = useState('text');
    const inputPlaceholder = messageType === 'picture' 
        ? 'Paste image URL...' 
        : 'Enter text here...';
    const messageStatus = [
        {value: "receive", label: "Receive"},
        {value: "send", label: "Send"},
        {value: "action", label: "Action"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageDetails = { textValue, contactName, statusType, messageType };
        console.log(messageDetails);
        props.onSubmit(messageDetails);
        setTextValue('');
    }; 

    return (
        <div className='write-ios-text'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    required
                    value={contactName} 
                    onChange={(e) => setContactName(e.target.value)} 
                    placeholder='Enter contact name...'
                />
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
                <hr className='divider' />
                <div className="message-type-selector">
                    <label>
                        <input 
                            type="radio" 
                            value="ios-text" 
                            checked={messageType === 'text' && statusType === 'action'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                        />
                        Text
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="ios-picture" 
                            checked={messageType === 'picture' && statusType != 'action'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                            disabled={statusType === 'action'}
                        />
                        Picture
                    </label>
                </div>
            </form>
        </div>
    )
}

export default PostText