import React from 'react'
import { images } from '../../../../Constant/images'

const ReactTech = () => {
    const {atomImage,reactImgImage,checkedImage} = images;
  return (
    <section className="react">
  <div className="react-pulse">
      <img src={atomImage} alt="" />
  </div>
  <div className="react-box">
      <div className="react-wraper">
          <div className="react-imgbox">
              <img src={reactImgImage} alt="best-company-image" />
          </div>
          <div className="react-textbox">
              <h1 className="react-h1">REACT</h1>
              <p className="react-p">React has the potential to reuse components, which means it does not require writing various codes for the same feature. Thereby, it saves time while developing the website.</p>
                  <p className="react-p">As React is intuitive to work, it enables quick & quality-assured web development. Therefore, it saves time for clients & developers.</p>     
          </div>
      </div>
    
      <div className="down-box-parent">
        <div className="down-box">
            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
              Modern technology
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">  
                Rich ecosystem
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
                Virtual DOM
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
                Best For startups
              </div>
            </div>

        </div>
      </div>

  </div>
</section>
  )
}

export default ReactTech