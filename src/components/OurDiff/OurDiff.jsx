import React from 'react'
import './OurDiff.css'
import Image from 'next/image'
import { features, ourDiffFeatures } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

function OurDiff() {
  return (
    <div className='od-wrapper'>
      <div className='container'>
        <div className='od-container'>

            {/* head */}
            <div className='od-head'>
              <motion.span
                initial= 'offScreen'
                whileInView='onScreen'
                variants={tagVariants}
                className='tag'
              >
                Our difference
              </motion.span>
              <motion.span
                initial= 'offScreen'
                whileInView='onScreen'
                variants={titleVariants}
                className='title'
              >
                Fair Capital, Hassle Free
              </motion.span>
              <motion.span
                initial= 'offScreen'
                whileInView='onScreen'
                variants={desVariants}
                className='text'
              >
                Our mission is to level the playing field for early stage growth capital.
                We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation.
              </motion.span>
            </div>

            {/* feature */}
            <div className='od-features'>
            {
              ourDiffFeatures.map((feature, i)=> (
                <motion.div
                  key={i}
                  initial= 'offScreen'
                  whileInView='onScreen'
                  variants={containerVariants((i+1) * 0.1)}
                  className='od-feature'
                >
                  <Image
                    src={feature.icon}
                    alt={'feature'}
                    width={128}
                    height={128}
                  />
                  <span className='sec-title'>{feature.title}</span>
                  <span className='text'>{feature.des}</span>
                </motion.div>
              ))
            }
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default OurDiff
