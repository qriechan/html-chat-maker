import React from 'react'

function Export() {
  return (
    <div className='export-container'>
    <button className='exporter'>Export as HTML (preview code below)</button>
    <textarea
        readOnly
    >allMessages</textarea>
    </div>
  )
}

export default Export