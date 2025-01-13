import React from 'react'
import { images } from '../../../../Constant/images'

const PHP = () => {
    const {
        folderImage,
    phpImage768x587Image,
    checkedImage
    } = images;
  return (
    <section className="php">
    <div className="php-pulse">
        <img src={folderImage} alt="" />
    </div>
    <div className="php-box">
        <div className="php-wraper">
            <div className="php-textbox">
                <h1 className="php-h1">PHP</h1>
                <p className="php-p">PHP is known for its cost-effectiveness and speed, thanks to its flexible features. It is a cross-platform 
                    language that allows developers to write code on various operating systems. </p>

                    <p className="php-p">The PHP platform has demonstrated improved loading speed compared to others, making it a valuable tool for achieving high rankings in SEO.</p>

                        <p className="php-p">PHP offers numerous advantages for web design, including simplicity, speed, flexibility, compatibility, security, and scalability. With PHP, you can create websites that are not only fast and responsive but also user-friendly.</p>
                
            </div>
            <div className="php-imgbox">
                <img src={phpImage768x587Image} alt="best-company-image" />
            </div>
        </div>
      
        <div className="down-box-parent">
        <div className="down-box">
            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
                Responsive
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">  
            Up-Gradation
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
                Security
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
                Maintenance
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

export default PHP