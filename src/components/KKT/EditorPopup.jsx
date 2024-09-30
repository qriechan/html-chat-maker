import React from 'react'
import Popup from 'reactjs-popup';
import { BiEdit } from "react-icons/bi";

function EditorPopup( {handleInputChange, channel, description} ) {

    return (
        <>
        <Popup 
            trigger={<button className='icon-edit-kkt'>
                <BiEdit size='1.25rem' />
            </button>}
            position="top center"
            modal="true"
        >
            <div className='popupper'>
                <label>Chat name:</label>
                <input
                    type="text"
                    name='chat description'
                    value={channel}
                    onChange={(e) => handleInputChange(e, 'chatName')}
                    placeholder='Enter chat / contact name...'
                    required
                />
                <label>Chat description:</label>
                <input
                    type="text"
                    name='chat description'
                    value={description}
                    onChange={(e) => handleInputChange(e, 'chatDesc')}
                    placeholder='Enter description (OPTIONAL)'
                />
            </div>
        </Popup>
        </>
    )
}

export default EditorPopup