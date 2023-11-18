import React from 'react'
import './HowItWorks.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { tagVariants, titleVariants } from '@/src/utils/animation'

function HowItWorks() {
  const featureVariants = {
    offScreen: {
      scale: 0.5
    },
    onScreen: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 1.5
      }
    }
  }

  return (
    <div className='hiw-wrapper'>
      <div className='container'>
        <div className='hiw-container'>

            {/* head */}
            <div className='hiw-head'>
              <motion.span
              initial= 'offScreen'
              whileInView='onScreen'
              variants={tagVariants}
              className='tag'
              >
                How it works
              </motion.span>
              <motion.span
              initial= 'offScreen'
              whileInView='onScreen'
              variants={titleVariants}
              className='title'
              >
                Unlocking potential along the growth journey
              </motion.span>
            </div>

            <div className='hiw-features'>
              {
                hitFeatures.map((feature, i)=> (
                  <motion.div
                    initial= 'offScreen'
                    whileInView='onScreen'
                    variants={featureVariants}
                    className='hiw-feature'
                    key={i}
                  >
                    {/* left side */}
                    <motion.div
                    initial= {{ opacity: 0, x: -100}}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: 'easeIn',
                        duration: 1,
                        delay: 0.7
                      }
                    }}
                    className='detail'
                    key={i}
                    >
                      <span className='des'>0{i+1}</span>
                      <span className='sec-title'>{feature.title}</span>
                      <span className='text'>{feature.des}</span>
                    </motion.div>

                    {/* right side */}
                    <div className='icon'>
                      <Image
                      src={feature.icon}
                      width={128}
                      height={128}
                      alt='feature'
                      style={{translate: '50% 0rem'}}
                      />
                    </div>
                  </motion.div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
