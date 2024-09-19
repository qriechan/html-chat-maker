import React from 'react'
import { useState } from 'react'
import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'

function Phone() {
    const [messageDetails, setMessageDetails] = useState(null);

    const getData = (data) => {
        setMessageDetails(data);
    };

    return (
        <div className='container'>
        <div className='phone'>
            <div className='text-area'>
                <div className='header'>
                    <p className='main-contact'>Contact Name</p>
                    <p className='bio'>Bio</p>
                </div>
            </div>
            <PostText onSubmit={getData} />
            {messageDetails && (
                    messageDetails.statusType === 'send' ? (
                        <SenderMessage 
                            contact={messageDetails.contactName}
                            text={messageDetails.textValue}
                        />
                    ) : (
                        <ReceiverMessage 
                            contact={messageDetails.contactName}
                            text={messageDetails.textValue}
                        />
                    )
                )}
        </div>
        </div>
    )
}

export default Phone