import React from 'react';
import { images } from '../../../../Constant/images';

const Joomla = () => {
  const { joomlaLogoImage, joomlaImage, checkedImage } = images;
  return (
    <section className="joomla">
      <div className="joomla-pulse">
        <img src={joomlaLogoImage} alt="" />
      </div>
      <div className="joomla-box">
        <div className="joomla-wraper">
          <div className="joomla-textbox">
            <h1 className="joomla-h1">JOOMLA</h1>
            <p className="joomla-p">
              Joomla is a platform that allows the user to use more than one
              template on a website. Therefore, implement different templates
              for different pages & attract the user.{' '}
            </p>

            <p className="joomla-p">
              As it supports PHP, making some changes in the code can allow the
              user to modify the feature with ease.
            </p>

            <p className="joomla-p">
              You can also extend the functionality of your website with
              thousands of plugins and themes available for Joomla. Joomla is
              also SEO-friendly, secure, fast, and mobile-responsive. With
              Joomla, you can create any website you can imagine.
            </p>
          </div>
          <div className="joomla-imgbox">
            <img src={joomlaImage} alt="best-company-image" />
          </div>
        </div>

        <div className="down-box-parent">
          <div className="down-box">
            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">Flexible</div>
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
              <div className="down-box-text">Mobile friendly</div>
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
              <div className="down-box-text">Seo friendly</div>
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

export default Joomla;
