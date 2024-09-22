import React from 'react'
import { useState } from 'react'

import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'
import ActionMessage from './MessageAction'
import EditorPopup from './EditorPopup';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import Export from './Export'

function Phone() {
    const [messages, setMessages] = useState([]);
    const [chatName, setChatName] = useState('Contact Name');
    const [chatDesc, setChatDesc] = useState('');
    const [channelType, setChannelType] = useState(''); 
    const [activeMessageIndex, setActiveMessageIndex] = useState(null); 
    const [includeContact, setIncludeContact] = useState(false);

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
    const handleInputChange = (e, field) => {
        const inputValue = e.target.value;

        if (field === 'chatName') {
            setChatName(inputValue);
        }
        if (field === 'chatDesc') {
            setChatDesc(inputValue);
        }
    };
    const handleContactName = (e) => {
        setIncludeContact(e.target.checked);
    }

    return (
        <div className='container'>
        <div className='ios-phone'>
            <div className='text-area'>
                <div className='ios-header'>
                    <EditorPopup 
                        handleInputChange={handleInputChange}
                        handleTypeSwitch={handleTypeSwitch}
                        handleContactName={handleContactName}
                        description={chatDesc}
                        channel={chatName}
                        includeContact={includeContact}
                    />
                    <p className='main-ios-contact'>{chatName}</p>
                    <p className='ios-bio'>{chatDesc}</p>
                </div>
                {messages.map((message, index) => {
                    const previousMessage = index > 0 ? messages[index - 1] : null;
                    const sameSenderAndStatus = previousMessage &&
                        message.contactName === previousMessage.contactName &&
                        message.statusType === previousMessage.statusType;

                    const showContactName = index === 0 || message.contactName !== previousMessage?.contactName;

                    console.log('Current message:', message);
                    console.log('Previous message:', previousMessage);
                    console.log('sameSenderAndStatus:', sameSenderAndStatus);

                    return (
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
                                text={message.textValue}
                                messageClass={message.messageType}
                                contact={message.contactName || ''}
                                includeContact={includeContact}
                                showContactName={showContactName}
                                sameSenderAndStatus={sameSenderAndStatus}
                            />
                        ) : message.statusType === 'send' ? (
                            <ReceiverMessage 
                                key={index}
                                text={message.textValue}
                                messageClass={message.messageType}
                                contact={message.contactName || ''}
                                includeContact={includeContact}
                                showContactName={showContactName}
                                sameSenderAndStatus={sameSenderAndStatus}
                            />
                        ) : <ActionMessage
                                key={index}
                                text={message.textValue}
                            />
                        }
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
                    );
                })}
            </div>
            <PostText onSubmit={handleAddMessage} />
        </div>
        <Export 
            messages={messages}
            chatName={chatName}
            chatDesc={chatDesc}
            includeContact={includeContact}
        />
        </div>
    )
}

export default Phone