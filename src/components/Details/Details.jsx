import React from 'react'
import './details.css'
import Medal from '../../assets/medal.png'
import Ticket from '../../assets/ticket.png'

function Details() {
  return (
    <div className="main-container details-container">
        <section className='details-section'>
                <div className='details-text'>
                  <h1 class="heading">
                    Much enjoyable <span class="highlight">sessions</span><br />
                    wraps in
                  </h1>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis </p>
                  <div className='certificate-wrapper'>
                    <img src={Medal} alt="illustration of a medal" />
                    <p>Certificate included</p>
                  </div>
                </div>
        
                <div className='details-image'>
                  <div className="price-details-wrapper">
                    <h1>₹199</h1>
                    <p className='per-head'>Per head</p>
                    <p className='discount'>60% off</p>
                  </div>
                  <p className='get-it-now'>GET IT NOW</p>
                  <img src={Ticket} alt="illustration of a ticket" />
                </div>
              </section>
    </div>
  )
}

export default Details