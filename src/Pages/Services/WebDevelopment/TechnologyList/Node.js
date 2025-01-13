import React from 'react'
import { images } from '../../../../Constant/images'

const Node = () => {
    const {nodeJs768x587Image,programingImage,checkedImage} = images;
  return (
    <section className="node-js">
  <div className="node-js-pulse">
      <img src={programingImage} alt="" />
  </div>
  <div className="node-js-box">
      <div className="node-js-wraper">
          <div className="node-js-textbox">
              <h1 className="node-js-h1">NODE JS</h1>
              <p className="node-js-p">Nord js has a cross-platform compatible feature that ensures broad reach & smooth user experience.</p>

                  <p className="node-js-p">Developing a website using Node js requires less code & fewer files. Therefore, it helps to save time & money in startup product development.</p>

                      <p className="node-js-p"> Node.js uses industry-standard security practices and features to protect your web application development from common threats and vulnerabilities.</p>
              
          </div>
          <div className="joomla-imgbox">
              <img src={nodeJs768x587Image} alt="best-company-image" />
          </div>
      </div>
    
      <div className="down-box-parent">
      <div className="down-box">
          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">
              Fast and lightweight
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">  
              Cross-platform
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
              Data-intensive applications
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">              
               Migrations
            </div>
          </div>

          <div className="down-box-i-text">
            <div className="down-box-i">
              <img src={checkedImage} alt="" />
            </div>
            <div className="down-box-text">              
               PWA
            </div>
          </div>
      </div>
    </div>

  </div>
</section>
  )
}

export default Node