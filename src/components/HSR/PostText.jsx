import React, { useState } from 'react'
import characterNames from './CharacterNames';
import Popup from 'reactjs-popup';
import StickerPopup from './StickerPopup';
import stickerIDs from './StickerIDs';

function PostText(props){

    const [textValue, setTextValue] = useState('');
    const [contactName, setContactName] = useState('Unknown');
    const [statusType, setStatusType] = useState('send');
    const [messageType, setMessageType] = useState('text');
    const [selectedStickerId, setSelectedStickerId] = useState('');
    const inputPlaceholder = messageType === 'picture' 
        ? 'Paste image URL...' 
        : messageType === 'sticker'
        ? 'Select sticker' 
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
    const handleStickerClick = (stickerId) => {
        if (messageType === 'sticker') {
            setSelectedStickerId(stickerId); 
            setTextValue(stickerId); 
        }
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
                    value={messageType === 'sticker' ? selectedStickerId : textValue} 
                    onChange={(e) => setTextValue(e.target.value)} 
                    placeholder={inputPlaceholder}
                    readOnly={messageType === 'sticker'}
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
                            value="text" 
                            checked={messageType === 'text' && statusType === 'action'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                        />
                        Text
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="sticker" 
                            checked={messageType === 'sticker' && statusType != 'action'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                            disabled={statusType === 'action'}
                        />
                        Sticker
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="picture" 
                            checked={messageType === 'picture' && statusType != 'action'} 
                            onChange={(e) => setMessageType(e.target.value)} 
                            disabled={statusType === 'action'}
                        />
                        Picture
                    </label>
                    {messageType === 'sticker' && 
                    (<Popup
                        trigger={<button type='button' className='sticker-select'>Select Sticker</button>}
                        lockScroll='true'
                        position={'top center'}>
                            <StickerPopup
                                stickerIDs={stickerIDs} 
                                onStickerClick={handleStickerClick} 
                            />
                    </Popup>)}
                </div>
            </form>
        </div>
    )
}

export default PostText