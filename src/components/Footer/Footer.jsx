import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'

function Footer() {
  return (
    <div className='f-wrapper'>
      <div className='container'>
        <div className='f-container'>
            <span className='title'>Get In Touch Today!</span>
            <EmailBox />

            {/* <hr/>
            <div className="f-menu">
                <span>Home</span>
                <span>What we do</span>
                <span>How it works</span>
                <span>Who we invest in</span>
                <span>Testmonials</span>
            </div> */}
            <hr/>

            <span className="text">Made with ❤️ by AHMEDCODE</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
