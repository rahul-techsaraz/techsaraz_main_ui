import React from 'react'
import DigitalMarketingServices from './DigitalMarketingServices'
import { OurEcommerce } from '../WebDevelopment/WebApplicationDevelopment/EcommerceDevelopment'

const Home = () => {
  return (
    <>
    <section className="competitor">
      <div className="competitor-pulse">
        <img src="images/competitor-analysis.png" alt="" />
      </div>
      <div className="competitor-in-box">
        <h1 className="competitor-h1">What sets Tech Saraz apart?</h1>
        <p className="competitor-p">
          Why do our clients regard us as the best digital marketing agency in Bangalore?
        </p>
        <div className="competitor-in-box-wraper">
          <div className="competitor-box">
            <div className="competitor-box-i">
              <i className="fa-solid fa-code"></i>
            </div>
            <h1 className="competitor-box-h1">Dedicated Project Manager</h1>
            <p className="competitor-box-p">
              We assign a dedicated project manager for each campaign to ensure smooth communication and flawless execution.
            </p>
          </div>

          <div className="competitor-box">
            <div className="competitor-box-i">
              <i className="fa-solid fa-code"></i>
            </div>
            <h1 className="competitor-box-h1">Marketing Automation</h1>
            <p className="competitor-box-p">
              We leverage advanced marketing automation tools to increase efficiency and enable personalized interactions with your customers.
            </p>
          </div>

          <div className="competitor-box">
            <div className="competitor-box-i">
              <i className="fa-solid fa-code"></i>
            </div>
            <h1 className="competitor-box-h1">ROI-Focused Marketing</h1>
            <p className="competitor-box-p">
              Our strategies focus on delivering the maximum return on your investment.
            </p>
          </div>

          <div className="competitor-box">
            <div className="competitor-box-i">
              <i className="fa-solid fa-code"></i>
            </div>
            <h1 className="competitor-box-h1">Real-Time Performance Tracking</h1>
            <p className="competitor-box-p">
              We believe in total transparency. Our regular reporting and performance tracking ensure you're always in the loop about your campaign's progress.
            </p>
          </div>

          <div className="competitor-box">
            <div className="competitor-box-i">
              <i className="fa-solid fa-code"></i>
            </div>
            <h1 className="competitor-box-h1">Results-Oriented Practices</h1>
            <p className="competitor-box-p">
              We measure our success by your success. Our practices are geared towards achieving tangible results that drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
    <DigitalMarketingServices />
    <OurEcommerce />
    </>
  )
}

export default Home