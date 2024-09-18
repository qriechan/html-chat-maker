import React from 'react'
import { Link } from 'react-router-dom'
import PostText from './PostText'
import SenderMessage from './MessageSender'
import ReceiverMessage from './MessageReceiver'

function Phone() {
    const getData = (data) => {
        console.log(data)
    };

    return (
        <div className='container'>
        <div className='phone'>
            <div className='text-area'>
                <div className='header'>
                    <p className='main-contact'>Contact Name</p>
                    <p className='bio'>Bio</p>
                </div>
                {/* <SenderMessage sender-contact={senderChrName} />
                <ReceiverMessage receiver-contact={} /> */}
                {/* Let user choose which type of message to upload (sender / receiver) */}
            </div>
            <PostText onSubmit={getData} />
        </div>
        </div>
    )
}

export default Phone