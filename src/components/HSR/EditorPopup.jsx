import React from 'react'
import Popup from 'reactjs-popup';
import { BiEdit } from "react-icons/bi";

function EditorPopup( {handleInputChange, handleTypeSwitch, handleAutofillChange, channel, description, autofill} ) {

    return (
        <>
        <Popup 
            trigger={<button className='icon-edit'>
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
                    placeholder='Enter description...'
                    required
                />
                <input 
                    type="radio"
                    name="type"
                    value="custom"
                    onChange={handleTypeSwitch && handleAutofillChange}
                    required
                />
                <label>Custom</label>
                <input 
                    type="radio"
                    name="type"
                    value="autofill"
                    checked={autofill}
                    onChange={handleTypeSwitch && handleAutofillChange}
                    required
                />
                <label>Autofill</label>
            </div>
        </Popup>
        </>
    )
}

export default EditorPopup