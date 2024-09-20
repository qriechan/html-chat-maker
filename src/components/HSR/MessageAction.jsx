import React from 'react'

function ActionMessage({ text }) {
  return (
    <>
    <table class="fullalert">
        <tr class="msg-row">
            <td class="alert-display"><img class="alert-icon" src="https://i.postimg.cc/9FN4jFcm/IMG-3971.png" width="100%" alt="Action" /></td>
            <td class="alert">{text}</td>
        </tr>
    </table>
    </>
  )
}

export default ActionMessage