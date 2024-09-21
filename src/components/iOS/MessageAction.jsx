import React from 'react'

function ActionMessage({ text }) {
  return (
    <>
    <table class="fullalert">
        <tr class="msg-row">
            <td class="alert-display"></td>
            <td class="alert">{text}</td>
        </tr>
    </table>
    </>
  )
}

export default ActionMessage