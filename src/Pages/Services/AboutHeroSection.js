import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../../Constant/routes'

const AboutHeroSection = () => {
  // function fn(){
  //   let WIDTH;
  //   let HEIGHT;
  //   let canvas;
  //   let con;
  //   let g;
  //   let pxs = [];
  //   const rint = 60;

  //   document.addEventListener("DOMContentLoaded", () => {
  //     WIDTH = window.innerWidth;
  //     HEIGHT = window.innerHeight;

  //     const container = document.getElementById("container");
  //     container.style.width = `${WIDTH}px`;
  //     container.style.height = `${HEIGHT}px`;

  //     canvas = document.getElementById("pixie");
  //     canvas.width = WIDTH;
  //     canvas.height = HEIGHT;
  //     con = canvas.getContext("2d");

  //     for (let i = 0; i < 100; i++) {
  //       pxs[i] = new Circle();
  //       pxs[i].reset();
  //     }

  //     // setInterval(draw, rint);

  //     // const mountains = document.getElementById("mountains");
  //     // const grass = document.getElementById("grass");

  //     // container.addEventListener("mousedown", (ev) => {
  //     //   const ox = ev.clientX;
  //     //   const om = parseInt(
  //     //     mountains.style.backgroundPositionX || "0"
  //     //   );
  //     //   const og = parseInt(
  //     //     grass.style.backgroundPositionX || "0"
  //     //   );

  //     //   const mouseMoveHandler = (e) => {
  //     //     mountains.style.backgroundPositionX = `${om + (e.clientX - ox) / 10}px`;
  //     //     grass.style.backgroundPositionX = `${og + (e.clientX - ox) / 4}px`;
  //     //     grass.style.backgroundPositionY = `10px`;
  //     //   };

  //     //   const mouseUpHandler = () => {
  //     //     container.removeEventListener("mousemove", mouseMoveHandler);
  //     //     container.removeEventListener("mouseup", mouseUpHandler);
  //     //   };

  //     //   container.addEventListener("mousemove", mouseMoveHandler);
  //     //   container.addEventListener("mouseup", mouseUpHandler);
  //     // });
  //   });

  //   // function draw() {
  //   //   con.clearRect(0, 0, WIDTH, HEIGHT);
  //   //   for (let i = 0; i < pxs.length; i++) {
  //   //     pxs[i].fade();
  //   //     pxs[i].move();
  //   //     pxs[i].draw();
  //   //   }
  //   // }

  //   class Circle {
  //     constructor() {
  //       this.s = {
  //         ttl: 8000,
  //         xmax: 5,
  //         ymax: 2,
  //         rmax: 10,
  //         rt: 1,
  //         xdef: 960,
  //         ydef: 540,
  //         xdrift: 4,
  //         ydrift: 4,
  //         random: true,
  //         blink: true,
  //       };
  //       this.reset();
  //     }

  //     reset() {
  //       this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;
  //       this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;
  //       this.r = (this.s.rmax - 1) * Math.random() + 1;
  //       this.dx = Math.random() * this.s.xmax * (Math.random() < 0.5 ? -1 : 1);
  //       this.dy = Math.random() * this.s.ymax * (Math.random() < 0.5 ? -1 : 1);
  //       this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
  //       this.rt = Math.random() * this.hl;
  //       this.s.rt = Math.random() + 1;
  //       this.stop = Math.random() * 0.2 + 0.4;
  //       this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
  //       this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
  //     }

  //     fade() {
  //       this.rt += this.s.rt;
  //     }

  //     draw() {
  //       if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) {
  //         this.s.rt *= -1;
  //       } else if (this.rt >= this.hl) {
  //         this.reset();
  //       }
  //       const newo = 1 - this.rt / this.hl;
  //       con.beginPath();
  //       con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
  //       con.closePath();

  //       const cr = this.r * newo;
  //       g = con.createRadialGradient(
  //         this.x,
  //         this.y,
  //         0,
  //         this.x,
  //         this.y,
  //         cr <= 0 ? 1 : cr
  //       );
  //       g.addColorStop(0.0, `rgba(255,255,255,${newo})`);
  //       g.addColorStop(this.stop, `rgba(77,101,181,${newo * 0.6})`);
  //       g.addColorStop(1.0, "rgba(77,101,181,0)");
  //       con.fillStyle = g;
  //       con.fill();
  //     }

  //     move() {
  //       this.x += (this.rt / this.hl) * this.dx;
  //       this.y += (this.rt / this.hl) * this.dy;
  //       if (this.x > WIDTH || this.x < 0) this.dx *= -1;
  //       if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
  //     }

  //     getX() {
  //       return this.x;
  //     }

  //     getY() {
  //       return this.y;
  //     }
  //   } 

  // }
      
  // useEffect(()=>{
  //   fn()
  // },[])
  
  return (
    <div className="services-hero-section">
      {/* <div id='container'>
      <canvas id="pixie"></canvas> */}
      <div className="hro">
        <div className="textBox">
          <h1 className="section-tectbox-h1">About Us</h1>
        </div>
        <div className="about-us-text-p">
          <p className="about-text-p1">
            Welcome to{' '}
            <Link to={Routes.HOME} className="tech-saraz-animation">
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
      </div>

      <div className='animate-center'>
        <div className='planet-container'>
          <div className='night'></div>
          <div className='day'></div>
          <div className='planet-cloud'></div>
          <div className='inner-shadow'></div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default AboutHeroSection