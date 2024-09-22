import React from 'react'

function ActionMessage({ text }) {
  return (
    <>
    <table class="fullalert">
        <tr class="msg-row">
            <td class="ios-alert">{text}</td>
        </tr>
    </table>
    </>
  )
}

export default ActionMessage