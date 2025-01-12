import React from 'react';
import { images } from '../../../../Constant/images';
import '../../../css/web-application-developmeent.css';

const WebApplicationDevelopmentServices = () => {
  const {
    mernStackDevelopment768x587Image,
    eCommerceDevelopment768x587Image,
    businessDashboardAPIIntegration768x587Image,
    customApplicationDevelopment768x587Image,
    onlineBookingPlatform768x587Image,
    uiImage,
    designtoolImage,
  } = images;
  return (
    <>
      <section class="development-services-in-Bangalore">
        <h1>Our web application development services in Bangalore</h1>
      </section>

      <section class="in-bangalore">
        <div class="in-bangalore-pulse">
          <img src={uiImage} alt="" />
        </div>
        <div class="in-bangalore-box">
          <div class="in-bangalore-wraper">
            <div class="in-bangalore-imgbox">
              <img
                src={mernStackDevelopment768x587Image}
                alt="best-company-image"
              />
            </div>
            <div class="in-bangalore-textbox">
              <h1 class="in-bangalore-h1">MERN stack development</h1>
              <p class="in-bangalore-p">
                The Tech Saraz team comprises front-end and back-end development
                experts specializing in MERN stack development.
              </p>

              <p class="in-bangalore-p">
                The MERN stack, which combines MongoDB, Express.js, React.js,
                and Node.js, allows us to create robust, efficient, and scalable
                web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="in-bangalore2">
        <div class="in-bangalore2-pulse">
          <img src="images/commerce.png" alt="" />
        </div>
        <div class="in-bangalore2-box">
          <div class="in-bangalore2-wraper">
            <div class="in-bangalore2-textbox">
              <h1 class="in-bangalore2-h1">E-commerce development</h1>
              <p class="in-bangalore2-p">
                In today’s digital age, having a user-friendly e-commerce
                platform is crucial for any business. Tech Saraz specializes in
                e-commerce web development in Bangalore, building intuitive and
                engaging platforms that facilitate seamless online shopping
                experiences.{' '}
              </p>
              <p class="in-bangalore2-p">
                Our solutions ultimately drive customer engagement and enhance
                sales.
              </p>
            </div>

            <div class="in-bangalore2-imgbox">
              <img
                src={eCommerceDevelopment768x587Image}
                alt="best-company-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="in-bangalore3">
        <div class="in-bangalore3-pulse">
          <img src="images/application.png" alt="" />
        </div>
        <div class="in-bangalore3-box">
          <div class="in-bangalore3-wraper">
            <div class="in-bangalore3-imgbox">
              <img
                src={customApplicationDevelopment768x587Image}
                alt="best-company-image"
              />
            </div>
            <div class="in-bangalore3-textbox">
              <h1 class="in-bangalore3-h1">Custom application development</h1>
              <p class="in-bangalore3-p">
                At Tech Saraz, we understand that a one-size-fits-all approach
                doesn’t work in web application development. Our team excels in
                creating custom web applications designed to meet your unique
                business requirements.
              </p>

              <p class="in-bangalore3-p">
                Whether it’s an enterprise application or a small business
                website, Tech Saraz has you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="in-bangalore4">
        <div class="in-bangalore4-pulse">
          <img src="images/dashboard.png" alt="" />
        </div>
        <div class="in-bangalore4-box">
          <div class="in-bangalore4-wraper">
            <div class="in-bangalore4-textbox">
              <h1 class="in-bangalore4-h1">
                Business dashboard and API integration
              </h1>
              <p class="in-bangalore4-p">
                Tech Saraz streamlines your business processes by integrating
                efficient dashboards and APIs into your web applications.
                Well-designed dashboards provide valuable insights at a glance,
                enabling quick decision-making.
              </p>
              <p class="in-bangalore4-p">
                API integration allows different software systems to communicate
                and work together, enhancing the overall efficiency of your
                business operations.
              </p>
            </div>
            <div class="in-bangalore4-imgbox">
              <img
                src={businessDashboardAPIIntegration768x587Image}
                alt="best-company-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="in-bangalore5">
        <div class="in-bangalore5-pulse">
          <img src="images/online-booking.png" alt="" />
        </div>
        <div class="in-bangalore5-box">
          <div class="in-bangalore5-wraper">
            <div class="in-bangalore5-imgbox">
              <img
                src={onlineBookingPlatform768x587Image}
                alt="best-company-image"
              />
            </div>
            <div class="in-bangalore5-textbox">
              <h1 class="in-bangalore5-h1">Online Booking Platform</h1>
              <p class="in-bangalore5-p">
                {' '}
                Acknowledging today’s dynamic, rapidly evolving world, Tech
                Saraz values a user-friendly online reservation system.
                Understanding the need for convenience, our company develops
                intuitive online booking platforms, streamlined to make the
                reservation process straightforward, eliminating any
                complications.
              </p>

              <p class="in-bangalore5-p">
                Our systems ensure an easy, stress-free experience for your
                valuable customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="in-bangalore6">
        <div class="in-bangalore6-pulse">
          <img src={designtoolImage} alt="" />
        </div>
        <div class="in-bangalore6-box">
          <div class="in-bangalore6-wraper">
            <div class="in-bangalore6-textbox">
              <h1 class="in-bangalore6-h1">Full Stack Development</h1>
              <p class="in-bangalore6-p">
                As a leading full-stack development company in Bangalore, Tech
                Saraz handles both front-end and back-end development of your
                web applications.{' '}
              </p>
              <p class="in-bangalore6-p">
                Our comprehensive full-stack development services ensure that
                every aspect of your web application works seamlessly,
                delivering an optimal user experience.
              </p>
            </div>
            <div class="in-bangalore6-imgbox">
              <img
                src={businessDashboardAPIIntegration768x587Image}
                alt="best-company-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebApplicationDevelopmentServices;
