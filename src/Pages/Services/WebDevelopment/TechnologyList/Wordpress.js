import React from 'react';
import { images } from '../../../../Constant/images';

const Wordpress = () => {
  const { checkedImage, socialImage, wordpressImgImage } = images;
  return (
    <section className="wordpress">
      <div className="wordpress-pulse">
        <img src={socialImage} alt="" />
      </div>
      <div className="wordpress-box">
        <div className="wordpress-wraper">
          <div className="wordpress-imgbox">
            <img src={wordpressImgImage} alt="best-company-image" />
          </div>
          <div className="wordpress-textbox">
            <h1 className="wordpress-h1">WORDPRESS</h1>
            <p className="wordpress-p">
              WordPress is one of the simplest forms of website development that
              allows user to manage the website from any computer with ease. You
              can Get our WordPress web development services in Bangalore.
            </p>

            <p className="wordpress-p">
              As WordPress is 100% customizable, this platform helps to provide
              a unique experience to visitors. Gains to enhance your site’s
              functionality and style.
            </p>

            <p className="wordpress-p">
              SEO-friendly and fast: WordPress is optimized for search engines
              and performance, ensuring that your site ranks well and loads
              quickly.
            </p>
          </div>
        </div>

        <div className="down-box-parent">
          <div className="down-box">
            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Scalable</div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Easy to use</div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Best for SEO</div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Editor</div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Visual</div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Optimize your business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wordpress;
