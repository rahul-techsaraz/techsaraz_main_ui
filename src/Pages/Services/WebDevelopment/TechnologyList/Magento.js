import React from 'react'
import { images } from '../../../../Constant/images'

const Magento = () => {
    const {
        magentoImage,
    magneto1Image,
    checkedImage
    } = images;
  return (
    <section className="magento">
  <div className="magento-pulse">
      <img src={magentoImage} alt="" />
  </div>
  <div className="magento-box">
      <div className="magento-wraper">
          <div className="magento-imgbox">
              <img src={magneto1Image} alt="best-company-image" />
          </div>
          <div className="magento-textbox">
              <h1 className="magento-h1">MAGENTO</h1>
              <p className="magento-p">Magento is an incredibly powerful self-hosted e-commerce platform that has been gaining popularity among online retailers due to its numerous features and benefits.</p>

                  <p className="magento-p">One of the key advantages of using Magento is its excellent SEO capabilities. With Magento, online retailers can significantly enhance their product visibility on Google and other search engines. This can result in increased traffic to their website and ultimately lead to more sales.</p>

                      <p className="magento-p">It allows the users to customize their security permissions. Therefore, it is a great way to prevent unauthorized changes & store the data safely & securely.</p>
                 
          </div>
      </div>
    
      <div className="down-box-parent">
        <div className="down-box">
            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
              Magento 2 migration services
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">  
                Features rich
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
                Multiple languages support
              </div>
            </div>

            <div className="down-box-i-text">
              <div className="down-box-i">
                <img src={checkedImage} alt="" />
              </div>
              <div className="down-box-text">
                Ecommerce development
              </div>
            </div>

        </div>
      </div>

  </div>
</section>
  )
}

export default Magento