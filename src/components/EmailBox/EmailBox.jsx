import React, { useState } from 'react'
import './EmailBox.css'
import { LuMail } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'

function EmailBox() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() !== '') {
      alert(`Submitting form with email: ${email}`);
    } else {
      alert('Email is required');
    }
  };

  return (
    <motion.div
      initial= {{
        width: '0.5rem',
        borderRadius: '100%',
      }}
      whileInView={{
        width: '70%',
        borderRadius: '999px',
        transition: {
          type: 'easeOut',
          duration: 1,
        },
      }}
      className='email-box'
    >
      
      {/* icon */}
      <motion.div
        variants={containerVariants(0.6)}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color='grey' />
      </motion.div>

      {/* input */}
      <motion.input
        variants={containerVariants(0.7)}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{
          once: true,
        }}
        type="email"
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

        {/* get touch button */}
        <motion.div
          variants={containerVariants(0.9)}
          initial='offScreen'
          whileInView='onScreen'
          viewport={{
            once: true,
          }}
          className='get-touch'
          onClick={handleSubmit}
        >
          get in touch
        </motion.div>
    </motion.div>
  )
}

export default EmailBox
