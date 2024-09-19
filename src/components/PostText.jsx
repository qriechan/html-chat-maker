import React, { useState } from 'react'

function PostText(props){

    const [textValue, setTextValue] = useState('');
    const [contactName, setContactName] = useState('Unknown');
    const [statusType, setStatusType] = useState('Send');

    const characterNames = [
        "Unknown",
        "Stelle",
        "Caelus",
        "Acheron",
        "Argenti",
        "Arlan",
        "Asta",
        "Aventurine",
        "Bailu",
        "Black Swan",
        "Blade",
        "Boothill",
        "Bronya",
        "Caelus_Harmony",
        "Clara",
        "Dan Heng",
        "Dan Heng Imbititor Lunae",
        "Dr Ratio",
        "Feixiao",
        "Firefly",
        "Gepard",
        "Guinaifen",
        "Hanya",
        "Herta",
        "Himeko",
        "Hook",
        "Huohuo",
        "Jade",
        "Jiaoqiu",
        "Jing Yuan",
        "Jingliu",
        "Kafka",
        "Lingsha",
        "Luka",
        "Luocha",
        "Lynx",
        "March 7th",
        "Misha",
        "Moze",
        "Natasha",
        "Pela",
        "Qingque",
        "Robin",
        "Ruan Mei",
        "Sampo",
        "Seele",
        "Serval",
        "Silver Wolf",
        "Sparkle",
        "Sushang",
        "Tingyun",
        "Topaz",
        "Welt",
        "Xueyi",
        "Yanqing",
        "Yukong",
        "Yunli"
    ];
    const messageStatus = [
        {value: "send", label: "Send"},
        {value: "receive", label: "Receive"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageDetails = { textValue, contactName, statusType };
        console.log(messageDetails);
        props.onSubmit(messageDetails);
        setTextValue('');
    };

    return (
        <div className='write-text'>
            <form onSubmit={handleSubmit}>
                <select value={contactName} onChange={(e) => setContactName(e.target.value)} required>
                    {characterNames.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <input 
                    type="text" 
                    required
                    value={textValue} 
                    onChange={(e) => setTextValue(e.target.value)} 
                    placeholder='Enter text here...'
                />
                <button type='submit'>Send</button>
                <div className='radio'>
                </div>
                {messageStatus.map((x, i) => <label key={i}>
                    <input 
                        type="radio"
                        name="status"
                        value={x.value}
                        onChange={(e) => setStatusType(e.target.value)}
                        required
                    /> 
                    {x.label}
                </label>)}
            </form>
        </div>
    )
}

export default PostText