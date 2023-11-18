import React from 'react'
import './WhoWeInvest.css'
import { whoWeInvest } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation'

function WhoWeInvest() {
  return (
    <div className='wwi-wrapper'>
      <div className="container">
        <div className="wwi-container">
            
            {/* lift side */}
            <div className="wwi-left">
                <div className="head">
                    <motion.span
                    initial='offScreen'
                    whileInView='onScreen'
                    variants={tagVariants}
                    className='tag'
                    >
                        Who we invest in
                    </motion.span>
                    <motion.span
                    initial='offScreen'
                    whileInView='onScreen'
                    variants={titleVariants}
                    className='title'
                    >
                        {' '}
                        Digital Businesses
                        <br />With Early Traction
                    </motion.span>
                </div>

                {/* features */}
                <div className="wwi-features">
                    {
                        whoWeInvest.map((feature, i) => (
                            <motion.div
                            initial='offScreen'
                            whileInView='onScreen'
                            variants={containerVariants(i * 0.05 + 1)}
                            className='wwi-feature'
                            key={i}
                            >
                                <span className='des'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>

            {/* right side */}
            <div className="wwi-right">
                <motion.img
                initial='offScreen'
                whileInView='onScreen'
                variants={containerVariants(0.5)}
                src="persons.png"
                alt="persons"
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeInvest
