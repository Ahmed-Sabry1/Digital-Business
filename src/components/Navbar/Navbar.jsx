'use client'

import React, { useState } from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  const [navStyle, setNavStyle] = useState('')
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (latest)=> {
    if (latest > 0.22) {
      setNavStyle('sticky')
    } else {
      setNavStyle('')
    }
  })

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className='container'>
        <div className='n-container'>
          {/* left side */}
          <div className='n-logo'>
            <Link to='h-wrapper' spy={true} smooth={true}>
              <span>AHMEDCODE</span>
            </Link>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
              <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100} >
                <span>Testmonials</span>
              </Link>
            </div>
            <div className='get-button'>
              <Link to="f-wrapper" spy={true} smooth={true}>
                get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile/tabe version */}
      <div className="nm-container">
        {/* logo */}
        <Link to='h-wrapper' spy={true} smooth={true}>
          <span>AHMEDCODE</span>
        </Link>

        {/* menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}
        {/* mobile menu */}
        <div className='nm-menu'
          style={{transform: mobileMenuOpened && 'translateX(0%)'}} >
          <Link
            className='nm-style'
            onClick={() => setMobileMenuOpened(false)}
            to='wwd-wrapper'
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            className='nm-style'
            onClick={() => setMobileMenuOpened(false)}
            to='hiw-wrapper'
            spy
            smooth
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            className='nm-style'
            onClick={() => setMobileMenuOpened(false)}
            to='wwi-wrapper'
            spy
            smooth
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            className='nm-style'
            onClick={() => setMobileMenuOpened(false)}
            to='t-wrapper'
            spy
            smooth
            offset={100}
          >
            <span>Testmonials</span>
          </Link>
          <div className='m-get-button'>
            <Link
              onClick={() => setMobileMenuOpened(false)}
              to='f-wrapper'
              spy={true}
              smooth={true}
            >
              get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
