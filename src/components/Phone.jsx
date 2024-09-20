import React from 'react'
import { useState, useEffect } from 'react'

import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'
import { imageURLs } from './ImageURLs';
import EditorPopup from './EditorPopup';
import contactInfo from './ContactInfo'

function Phone() {
    const [messages, setMessages] = useState([]);
    const [chatName, setChatName] = useState('Contact Name');
    const [chatDesc, setChatDesc] = useState('Enter description...');
    const [channelType, setChannelType] = useState(''); 
    const [autofill, setAutofill] = useState(false);

    const handleAddMessage = (messageDetails) => {
        setMessages((prevMessages) => [...prevMessages, messageDetails]);
    };
    const handleTypeSwitch = (e) => {
        setChannelType(e.target.value);
    }
    const handleAutofillChange = () => {
        setAutofill((prevAutofill) => !prevAutofill);
    };
    useEffect(() => {
        if (autofill && chatName) {
          const selectedChat = contactInfo.find((c) => c.chatName === chatName);
          if (selectedChat) {
            setChatDesc(selectedChat.chatDesc);
          }
        }
    }, [chatName, autofill]);
    const handleInputChange = (e, field) => {
        const inputValue = e.target.value;

        if (field === 'chatName') {
            setChatName(inputValue);
        }
        if ((field === 'chatDesc') && (!autofill)) {
            setChatDesc(inputValue);
        }
    };

    return (
        <div className='container'>
        <div className='phone'>
            <div className='text-area'>
                <div className='header'>
                    <EditorPopup 
                        handleInputChange={handleInputChange}
                        handleTypeSwitch={handleTypeSwitch}
                        handleAutofillChange={handleAutofillChange}
                        description={chatDesc}
                        channel={chatName}
                        autofill={autofill}
                    />
                    <p className='main-contact'>{chatName}</p>
                    <p className='bio'>{chatDesc}</p>
                </div>
                {messages.map((message, index) => (
                    message.statusType === 'receive' ? (
                        <SenderMessage 
                            key={index}
                            contact={message.contactName}
                            text={message.textValue}
                            imageURLs = {imageURLs}
                        />
                    ) : (
                        <ReceiverMessage 
                            key={index}
                            contact={message.contactName}
                            text={message.textValue}
                            imageURLs = {imageURLs}
                        />
                    )
                ))}
            </div>
            <PostText onSubmit={handleAddMessage} />
        </div>
        </div>
    )
}

export default Phone