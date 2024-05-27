import React from 'react'
import { Button } from './Button'
import'./FootNote.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className = "footer-subscription-heading">
            Created by Rehan and Leon
        </p>
        <p className='footer-subscription-text'>
           Contact Us:
           rehans0906@gmail.com
           chienleonllc@gmail.com
        </p>
      </section>
    </div>
  )
}

export default Footer