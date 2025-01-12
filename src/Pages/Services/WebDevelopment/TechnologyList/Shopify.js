import React from 'react'
import { images } from '../../../../Constant/images'

const Shopify = () => {
    const {shopifyImage, shopify2Image,checkedImage} = images;
  return (
    <section className="shopify">
  <div className="shopify-pulse">
      <img src={shopifyImage} alt="" />
  </div>
  <div className="shopify-box">
      <div className="shopify-wraper">
          <div className="shopify-textbox">
              <h1 className="shopify-h1">SHOPIFY</h1>
              <p className="shopify-p">Shopify is one of the most popular and powerful e-commerce platforms in the world, with over 1.7 million merchants and billions of dollars in sales. Shopify offers a range of features and benefits for web development. </p>
                  <p className="shopify-p">Shopify is secure, reliable & provides 24/7 customer support to its users. It has many mobile responsive themes to choose from. </p>   
          </div>
          <div className="shopify-imgbox">
              <img src={shopify2Image} alt="best-company-image" />
          </div>
      </div>
    
      <div className="down-box-parent">
      <div className="down-box">
          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">
              Fast setup
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">  
          User-friendly
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">
              Logical interface
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">
              Best for an online store
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">              
               Seamless integration
            </div>
          </div>

      </div>
    </div>

  </div>
</section>
  )
}

export default Shopify