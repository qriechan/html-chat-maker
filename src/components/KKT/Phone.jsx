import React from 'react'
import { useState, useEffect } from 'react'

import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'
import ActionMessage from './MessageAction'
import EditorPopup from './EditorPopup';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Export from './Export'

function Phone() {
    const [messages, setMessages] = useState([]);
    const [chatName, setChatName] = useState('Contact Name');
    const [chatDesc, setChatDesc] = useState('');
    const [channelType, setChannelType] = useState(''); 
    const [activeMessageIndex, setActiveMessageIndex] = useState(null); 
    const defaultPfp = 'https://i.postimg.cc/4dx2brCt/default-avatar-icon-of-social-media-user-vector.jpg';

    useEffect(() => {
    }, [messages]);

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

    return (
        <div className='container'>
        <div className='kkt-phone'>
            <div className='text-area'>
                <div className='kkt-header'>
                    <EditorPopup 
                        handleInputChange={handleInputChange}
                        handleTypeSwitch={handleTypeSwitch}
                        handleContactName={handleContactName}
                        description={chatDesc}
                        channel={chatName}
                    />
                    <div className='kkt-header-components'>
                        <div className='kkt-header-front'>
                            <FiChevronLeft size={"1.75rem"} />
                            <p className='main-kkt-contact'>{chatName}</p>
                        </div>
                        <div className='kkt-header-back'>
                            <IoSearch size={"1.25rem"} />
                            <FiMenu size={"1.5rem"} />
                        </div>
                    </div>
                    <p className='kkt-bio'>{chatDesc}</p>
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
                                icon={message.contactIcon || defaultPfp}
                                showContactName={showContactName}
                                sameSenderAndStatus={sameSenderAndStatus}
                            />
                        ) : message.statusType === 'send' ? (
                            <ReceiverMessage 
                                key={index}
                                text={message.textValue}
                                messageClass={message.messageType}
                                contact={message.contactName || ''}
                                icon={message.contactIcon || defaultPfp}
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
        />
        </div>
    )
}

export default Phone