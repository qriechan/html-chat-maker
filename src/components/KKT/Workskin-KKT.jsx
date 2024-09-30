import React from 'react'

function WorkskinIOS({ textRef }) {
  return (
    <div className='code-box'>
        <h3>iOS Message Workskin</h3>
        <div className='workskin-box' ref={textRef}> 
        <p className='tiny'>#workskin .ios-phone {'{'}</p>
        <p className='tiny'>font-family: Arial, Helvetica, Inter, Roboto, sans-serif;</p>
        <p className='tiny'>max-width: 21.875rem;</p>
        <p className='tiny'>display: table;</p>
        <p className='tiny'>margin: auto;</p>
        <p className='tiny'>padding-left: 1rem;</p>
        <p className='tiny'>padding-right: 1rem;</p>
        <p className='tiny'>padding-bottom: 1rem;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'></p>
        <p className='tiny'>#workskin .ios-header {'{'}</p>
        <p className='tiny'>background-color: #F6F6F6;</p>
        <p className='tiny'>min-width: 21.875rem;</p>
        <p className='tiny'>border-bottom: 0.094rem solid #b9bdbf;</p>
        <p className='tiny'>padding-bottom: 0.5rem;</p>
        <p className='tiny'>padding-top: 0.5rem;</p>
        <p className='tiny'>margin-left: -0.5rem;</p>
        <p className='tiny'>margin-right: -0.5em;</p>
        <p className='tiny'>margin-bottom: 1rem;</p>
        <p className='tiny'>text-align: center;</p>
        <p className='tiny'>text-transform: capitalize;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'></p>
        <p className='tiny'>#workskin .main-ios-contact {'{'}</p>
        <p className='tiny'>color: #000;</p>
        <p className='tiny'>font-weight: bold;</p>
        <p className='tiny'>margin-top: 0.75rem;</p>
        <p className='tiny'>margin-bottom: 0;</p>
        <p className='tiny'>font-size: larger;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'></p>
        <p className='tiny'>#workskin .ios-bio {'{'}</p>
        <p className='tiny'>margin: 0.5rem auto 0.25rem auto;</p>
        <p className='tiny'>color: #666868;</p>
        <p className='tiny'>font-size: smaller;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'></p>
        <p className='tiny'>#workskin .ios-text {'{'}</p>
        <p className='tiny'>float: left;</p>
        <p className='tiny'>margin: 0 0 .75rem .75rem;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .ios-reply {'{'}</p>
        <p className='tiny'>float: right;</p>
        <p className='tiny'>margin: 0 .75rem .75rem;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-text {'{'}</p>
        <p className='tiny'>margin-right: auto;</p>
        <p className='tiny'>margin-left: 0rem;</p>
        <p className='tiny'>width: 100%;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-ios-reply .ios-ios-picture, .full-ios-text .ios-ios-picture {'{'}</p>
        <p className='tiny'>width: 12.5rem;</p>
        <p className='tiny'>height: 9.375rem;</p>
        <p className='tiny'>background-color: #000;</p>
        <p className='tiny'>border-radius: 1rem;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-text .ios-ios-text {'{'}</p>
        <p className='tiny'>float: left;</p>
        <p className='tiny'>color: #000000;</p>
        <p className='tiny'>margin: 0 0 0.5em;</p>
        <p className='tiny'>border-radius: 1.25em;</p>
        <p className='tiny'>padding: 0.75rem 1.25rem 0.75rem 1.25rem;</p>
        <p className='tiny'>background: #e5e5ea;</p>
        <p className='tiny'>max-width: 70%;</p>
        <p className='tiny'>clear: both;</p>
        <p className='tiny'>position: relative;</p>
        <p className='tiny'>overflow-wrap: break-word;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-text .ios-ios-text::after {'{'}</p>
        <p className='tiny'>content: "";</p>
        <p className='tiny'>position: absolute;</p>
        <p className='tiny'>left: -.5em;</p>
        <p className='tiny'>bottom: 0;</p>
        <p className='tiny'>width: 0.5em;</p>
        <p className='tiny'>height: 1.5em;</p>
        <p className='tiny'>border-right: 0.75em solid #e5e5ea;</p>
        <p className='tiny'>border-bottom-right-radius: 1.25em 0.5em;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-text .ios-ios-picture {'{'}</p>
        <p className='tiny'>float: left;</p>
        <p className='tiny'>margin: 0.5rem 0.75rem 1rem 1.5rem;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-reply {'{'}</p>
        <p className='tiny'>margin-right: 0rem;</p>
        <p className='tiny'>margin-left: auto;</p>
        <p className='tiny'>width: 100%;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-reply .ios-ios-text {'{'}</p>
        <p className='tiny'>float: right;</p>
        <p className='tiny'>color: #FFFFFF;</p>
        <p className='tiny'>margin: 0 0 0.5em;</p>
        <p className='tiny'>border-radius: 1.25em;</p>
        <p className='tiny'>padding: 0.75rem 1.25rem 0.75rem 1.25rem;</p>
        <p className='tiny'>background: #0b93f6;</p>
        <p className='tiny'>max-width: 70%;</p>
        <p className='tiny'>clear: both;</p>
        <p className='tiny'>position: relative;</p>
        <p className='tiny'>overflow-wrap: break-word;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-reply .ios-ios-text::after {'{'}</p>
        <p className='tiny'>content: "";</p>
        <p className='tiny'>position: absolute;</p>
        <p className='tiny'>right: -0.5em;</p>
        <p className='tiny'>bottom: 0;</p>
        <p className='tiny'>width: 0.5em;</p>
        <p className='tiny'>height: 1.5em;</p>
        <p className='tiny'>border-left: 0.75em solid #0b93f6;</p>
        <p className='tiny'>border-bottom-left-radius: 1.25em 0.5em;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .full-reply .ios-ios-picture {'{'}</p>
        <p className='tiny'>float: right;</p>
        <p className='tiny'>margin: 0.5rem 1.5rem 1rem 0.75rem;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .no-after::after {'{'}</p>
        <p className='tiny'>content: none;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .sender-contact {'{'}</p>
        <p className='tiny'>font-weight: 500;</p>
        <p className='tiny'>font-size: 90%;</p>
        <p className='tiny'>color: #666868;</p>
        <p className='tiny'>padding: 0 0 0.25rem 0.75rem;</p>
        <p className='tiny'>float: left;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .receiver-contact {'{'}</p>
        <p className='tiny'>font-weight: 500;</p>
        <p className='tiny'>font-size: 90%;</p>
        <p className='tiny'>color: #666868;</p>
        <p className='tiny'>padding: 0 0.75rem 0.25rem 0;</p>
        <p className='tiny'>text-align: right;</p>
        <p className='tiny'>float: right;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .fullalert {'{'}</p>
        <p className='tiny'>vertical-align: middle;</p>
        <p className='tiny'>width: -moz-fit-content;</p>
        <p className='tiny'>width: fit-content;</p>
        <p className='tiny'>margin-left: auto;</p>
        <p className='tiny'>margin-right: auto;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .alert-display {'{'}</p>
        <p className='tiny'>width: -moz-fit-content;</p>
        <p className='tiny'>width: fit-content;</p>
        <p className='tiny'>text-align: center;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'></p>
        <p className='tiny'>#workskin .alert {'{'}</p>
        <p className='tiny'>vertical-align: middle;</p>
        <p className='tiny'>text-align: left;</p>
        <p className='tiny'>color: #858586;</p>
        <p className='tiny'>font-size: small;</p>
        <p className='tiny'>padding: 0rem;</p>
        <p className='tiny'>margin: 0;</p>
        <p className='tiny'>display: table;</p>
        <p className='tiny'>{'}'}</p>
        <p className='tiny'>#workskin .no-after::after {'{'}</p>
        <p className='tiny'>content: none;</p>
        <p className='tiny'>{'}'}</p>
      </div>
    </div>
  )
}

export default WorkskinIOS