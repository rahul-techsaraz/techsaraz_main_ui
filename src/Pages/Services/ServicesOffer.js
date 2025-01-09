import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../Constant/images';

const ServicesOffer = () => {
    const {
        repairToolImage,
        machineLearning,
        oneImage,
        serviceimg1Image,
        campaignImage,
        serviceimg2Image,
        graphicdesignerImage,
        serviceimg4Image,
        digitalartImage,
        pexelsolly3756679Image,
        write1Image,
        service4Image,
        pentool2Image,
        pexelsfabianwiktor3471423Image
    } = images;
  return (
    <section className="services">
    <div className="services-pulse">
        <img src={repairToolImage} alt="" />
    </div>
    <div className="services-in-box">
        <div className="services-heading"><button className="services-heading-text">OUR SERVICES<span className="services-span-circle"></span></button></div>
        <h1 className="services-h1">Services We Provide</h1>
    <nav className="services-nav">
        <ul>
          <li>
            <Link to="./web-development"><div className="link">
                  <div className="link-span">
                      <div className="service-flexbox">
                      <div className="service-img">
                          <img src={machineLearning} alt="" />
                      </div>
                      <div className="service-div"><h1 className="service-text">Web Development</h1></div>
                      <div className="service-peragraph"><p className="service-p"> It is a long established fact that a reader will be distracted by 
                          the readable content of a page when looking at its layout</p></div>
                          <div className="service-icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
                  <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                      <img className="hidden-img" src={serviceimg1Image} alt="" />
                  </div>
                
              </div>
            </Link>
          </li>

          <li>
            <Link to="./e-commerce">
              <div className="link">
                  <div className="link-span">
                      <div className="service-flexbox">
                      <div className="service-img">
                          <img src={campaignImage} alt="" />
                      </div>
                      <div className="service-div"><h1 className="service-text">E-commerce</h1></div>
                      <div className="service-peragraph"><p className="service-p"> It is a long established fact that a reader will be distracted by 
                          the readable content of a page when looking at its layout</p></div>
                          <div className="service-icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
                  <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                      <img className="hidden-img" src={serviceimg2Image} alt="" />
                  </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="./ui-and-ux-designing">
              <div className="link">
                  <div className="link-span">
                      <div className="service-flexbox">
                      <div className="service-img">
                          <img src={graphicdesignerImage} alt="" />
                      </div>
                      <div className="service-div"><h1 className="service-text">UI and UX Designing</h1></div>
                      <div className="service-peragraph"><p className="service-p"> It is a long established fact that a reader will be distracted by 
                          the readable content of a page when looking at its layout</p></div>
                          <div className="service-icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
                  <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                      <img className="hidden-img" src={service4Image} alt="" />
                  </div>
              </div>
            </Link>
          </li>

          <li>
            <Link to="./digital-merketing"><div className="link">
                  <div className="link-span">
                      <div className="service-flexbox">
                      <div className="service-img">
                        <img src={digitalartImage} alt="" />
                      </div>
                      <div className="service-div"><h1 className="service-text">Digital Marketing</h1></div>
                      <div className="service-peragraph"><p className="service-p"> It is a long established fact that a reader will be distracted by 
                          the readable content of a page when looking at its layout</p></div>
                          <div className="service-icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
                  <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img className="hidden-img" src={pexelsolly3756679Image} alt="" />
                  </div>
                
              </div>
            </Link>
          </li>

          <li>
            <Link to="./content-writing"><div className="link">
                  <div className="link-span">
                      <div className="service-flexbox">
                      <div className="service-img">
                        <img src={write1Image} alt="" />
                      </div>
                      <div className="service-div"><h1 className="service-text">Content Writing</h1></div>
                      <div className="service-peragraph"><p className="service-p"> It is a long established fact that a reader will be distracted by 
                          the readable content of a page when looking at its layout</p></div>
                          <div className="service-icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
                  <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img className="hidden-img" src={service4Image} alt="" />
                  </div>
                
              </div>
            </Link>
          </li>

          <li>
            <Link to="./graphics-design"><div className="link">
                  <div className="link-span">
                      <div className="service-flexbox">
                      <div className="service-img">
                        <img src={pentool2Image} alt="" />
                      </div>
                      <div className="service-div"><h1 className="service-text">Graphics Designing</h1></div>
                      <div className="service-peragraph"><p className="service-p"> It is a long established fact that a reader will be distracted by 
                          the readable content of a page when looking at its layout</p></div>
                          <div className="service-icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
                  <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img className="hidden-img" src={pexelsfabianwiktor3471423Image} alt="" />
                  </div>
                
              </div>
            </Link>
          </li>

        </ul>
    </nav>
</div>
</section>
  )
}

export default ServicesOffer