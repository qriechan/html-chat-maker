import React from 'react'
import { useState, useEffect } from 'react'

import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'
import { imageURLs } from './ImageURLs';
import EditorPopup from './EditorPopup';
import contactInfo from './ContactInfo'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import Export from './Export'

function Phone() {
    const [messages, setMessages] = useState([]);
    const [chatName, setChatName] = useState('Contact Name');
    const [chatDesc, setChatDesc] = useState('Enter description...');
    const [channelType, setChannelType] = useState(''); 
    const [autofill, setAutofill] = useState(false);
    const [activeMessageIndex, setActiveMessageIndex] = useState(null); 

    const handleAddMessage = (messageDetails) => {
        setMessages((prevMessages) => [...prevMessages, messageDetails]);
    };
    const handleDeleteMessage = (index) => {
        setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
    };
    const toggleDeleteButton = (index) => {
        setActiveMessageIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const moveMessageUp = (index) => {
        if (index > 0) {
            const updatedMessages = [...messages];
            const temp = updatedMessages[index - 1];
            updatedMessages[index - 1] = updatedMessages[index];
            updatedMessages[index] = temp;
            setMessages(updatedMessages);
        }
    };
    const moveMessageDown = (index) => {
        if (index < messages.length - 1) {
            const updatedMessages = [...messages];
            const temp = updatedMessages[index + 1];
            updatedMessages[index + 1] = updatedMessages[index];
            updatedMessages[index] = temp;
            setMessages(updatedMessages);
        }
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
        <div className='hsr-phone'>
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
                    <div
                        key={index}
                        onMouseEnter={() => setActiveMessageIndex(index)}
                        onMouseLeave={() => setActiveMessageIndex(null)}
                        onClick={() => toggleDeleteButton(index)}
                        style={{ position: 'relative' }}
                    >
                        {message.statusType === 'receive' ? (
                            <SenderMessage 
                                key={index}
                                contact={message.contactName}
                                text={message.textValue}
                                imageURLs = {imageURLs}
                                messageClass={message.messageType}
                            />
                        ) : (
                            <ReceiverMessage 
                                key={index}
                                contact={message.contactName}
                                text={message.textValue}
                                imageURLs = {imageURLs}
                                messageClass={message.messageType}
                            />
                        )}
                        {activeMessageIndex === index && (
                            <div className='edit-btn-div'>
                            <button
                                onClick={() => handleDeleteMessage(index)}
                            >
                                <RiDeleteBin2Fill size='20px' />
                            </button>
                            <button
                                onClick={() => moveMessageUp(index)}
                                disabled={index === 0} // Disable if already at the top
                            >
                                <IoMdArrowRoundUp size='20px' />
                            </button>
                            <button
                                onClick={() => moveMessageDown(index)}
                                disabled={index === messages.length - 1} // Disable if already at the bottom
                            >
                                <IoMdArrowRoundDown size='20px' />
                            </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <PostText onSubmit={handleAddMessage} />
        </div>
        <Export 
            messages={messages}
            chatName={chatName}
            chatDesc={chatDesc}
            imageURLs={imageURLs}
        />
        </div>
    )
}

export default Phone