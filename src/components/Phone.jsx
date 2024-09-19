import React from 'react'
import { useState } from 'react'
import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'

function Phone() {
    const [messages, setMessages] = useState([]);

    const handleAddMessage = (messageDetails) => {
        setMessages((prevMessages) => [...prevMessages, messageDetails]);
    };

    return (
        <div className='container'>
        <div className='phone'>
            <div className='text-area'>
                <div className='header'>
                    <p className='main-contact'>Contact Name</p>
                    <p className='bio'>Bio</p>
                </div>
                {messages.map((message, index) => (
                    message.statusType === 'send' ? (
                        <SenderMessage 
                            key={index}
                            contact={message.contactName}
                            text={message.textValue}
                        />
                    ) : (
                        <ReceiverMessage 
                            key={index}
                            contact={message.contactName}
                            text={message.textValue}
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