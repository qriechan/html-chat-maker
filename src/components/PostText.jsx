import React, { useState } from 'react'

function PostText(props){

    const [textValue, setTextValue] = useState('');
    const [contactName, setContactName] = useState('Unknown');
    const [statusType, setStatusType] = useState('Send');
    const messageStatus = [
        {value: "send", label: "Send"},
        {value: "receive", label: "Receive"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageDetails = { textValue, contactName, statusType };
        console.log(messageDetails);
        props.onSubmit(messageDetails);
    };

    return (
        <div className='write-text'>
            <form onSubmit={handleSubmit}>
                <select value={contactName} onChange={(e) => setContactName(e.target.value)} required>
                    <option value="Aventurine">Aventurine</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <input 
                    type="text" 
                    required
                    value={textValue} 
                    onChange={(e) => setTextValue(e.target.value)} 
                    placeholder='Enter text here...'
                />
                <button type='submit'>Send</button>
                <div className='radio'>
                </div>
                {messageStatus.map((x, i) => <label key={i}>
                    <input 
                        type="radio"
                        name="status"
                        value={x.value}
                        onChange={(e) => setStatusType(e.target.value)}
                        required
                    /> 
                    {x.label}
                </label>)}
            </form>
        </div>
    )
}

export default PostText