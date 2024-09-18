import React from 'react'

function ReceiverMessage() {
    return (
        <table className='full-reply'>
                <tr className='msg-row'>
                    <td className='receiver-contact'>Contact Name</td>
                    <td rowSpan="2" className='td-icon'>
                        <img className='hsricon' src='{imgUrl}' width="100%" alt='{chrName} icon' />
                    </td>
                </tr>
                <tr className='msg-row'>
                    <td className='reply'>Message Text</td>
                </tr>
        </table>
    )
}

export default ReceiverMessage