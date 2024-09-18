import React from 'react'

function SenderMessage() {
    return (
        <table className='full-text'>
                <tr className='msg-row'>
                    <td rowSpan="2" className='td-icon'>
                        <img className='hsricon' src='{imgUrl}' width="100%" alt='{chrName} icon' />
                    </td>
                    <td className='sender-contact'>Contact Name</td>
                </tr>
                <tr className='msg-row'>
                    <td className='text'>Message Text</td>
                </tr>
        </table>
    )
}

export default SenderMessage