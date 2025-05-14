import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactHeroSection = () => {
  function fn() {
    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame || window.requestAnimationFrame || window.requestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                }
    })();
    var canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d'), w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight, hue = 217, stars = [], count = 0, maxStars = 1200;
    var canvas2 = document.createElement('canvas'), ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2, gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');
    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();
    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0
        }
        if (min > max) {
            var hold = max;
            max = min;
            min = hold
        }
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function maxOrbit(x, y) {
        var max = Math.max(x, y), diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2
    }

    var Star = function () {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 12;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 900000;
        this.alpha = random(2, 10) / 10;
        count++;
        stars[count] = this
    };
    Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX, y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY, twinkle = random(10);
        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05
        }
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed
    };
    for (var i = 0; i < maxStars; i++) {
        new Star()
    }
    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw()
        }
        
        window.requestAnimationFrame(animation)
    }

    animation();
}

useEffect(()=>{
  fn();  
},[])
  return (
    <>
      <div className="layerrr">
        <div className="contact-name-haeding">Contact Us</div>
        <div className="about-us-text-p">
          <p className="about-text-p1">
            Welcome to{' '}
            <Link href="#" className="tech-saraz-animation">
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              Tech SaraZ
            </Link>
          </p>
          <p className="about-text-p2">
            Where innovation meets expertise in web development
          </p>
        </div>
        <canvas id="canvas"></canvas>

        {/* The plane and cloud SVGs */}
        <div className="frame">
          <div className="plane-container">
            <a
              href="http://customer.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="1131.53px"
                height="379.304px"
                viewBox="0 0 1131.53 379.304"
                enableBackground="new 0 0 1131.53 379.304"
                xmlSpace="preserve"
                className="plane"
              >
                <polygon
                  fill="#ff002f"
                  points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  "
                />
                <polygon
                  fill="#78051a"
                  points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   "
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="clouds">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud big front slowest"
          >
            <path
              fill="#ffffff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud distant smaller"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud small slow"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud distant super-slow massive"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud slower"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
        </div>
      </div>
      <section className="company-details">
        <div className="company-details-wraper">
          <div className="company-details-box">
            <div className="company-details-box-i">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="company-details-box-text">
              <h3 className="company-details-box-heading">
                Our Office Address
              </h3>
              <p className="company-details-box-p">
                Nagar Phase 7 Bengaluru 560062 India
              </p>
            </div>
          </div>

          <div className="company-details-box">
            <div className="company-details-box-i">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="company-details-box-text">
              <h3 className="company-details-box-heading">Call Us Anytime</h3>
              <p className="company-details-box-p">
              <a href='tel:+917760231920' target="blank"><span className="company-details-box-span">+917760231920</span></a>
              <a href='tel:+919886958347' target="blank"><span className="company-details-box-span">+919886958347</span></a>
              </p>
            </div>
          </div>

          <div className="company-details-box">
            <div className="company-details-box-i">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="company-details-box-text">
              <h3 className="company-details-box-heading">Send An Email</h3>
              <p className="company-details-box-p">info@techsaraz.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHeroSection;
