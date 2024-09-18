import React, { useState } from 'react'

const PostText = (props) => {

    const  [inputValue, setInputValue] = useState('');

    const  handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const  handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input  type="text" value={inputValue} onChange={handleChange} placeholder='Enter text here...' />
            <button type='submit'>Send</button>
            </form>
            <p className='sender'>{inputValue}</p>
        </div>
    )
}

export default PostText