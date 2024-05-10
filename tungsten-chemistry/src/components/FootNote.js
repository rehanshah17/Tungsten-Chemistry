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
        </p>
        <div className='input-areas'>
            <form>
                <input type="email" name="email" placeholder='Your Email' className='footer-input'>
                </input>
                <Button buttonStyle="btn--primary"> Enter</Button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Footer