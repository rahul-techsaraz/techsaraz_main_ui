import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogHeroSection = () => {
  const BlogHeroSestionAnimation = () => {
    const patternElement = document.getElementById('pattern');
    if (!patternElement) return;
    const countY = Math.ceil(patternElement.clientHeight / 40) + 1;
    const countX = Math.ceil(patternElement.clientWidth / 48) + 1;
    // const gap = 2;

    for (let i = 0; i < countY; i++) {
      for (let j = 0; j < countX; j++) {
        const loc = document.createElement('loc');
        loc.style = `
          background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;
          width: 44px;
          height: 50px;
          background-size: contain;
          position: absolute;
          top: ${i * 40}px;
          left: ${j * 48 + ((i * 24) % 48)}px;
        `;

        patternElement.appendChild(loc);
      }
    }

    let mousePosition = {
      x: 0,
      y: 0,
    };

    document.addEventListener('mousemove', (mouse) => {
      mousePosition = {
        x: mouse.clientX,
        y: mouse.clientY,
      };
    });

    const loop = () => {
      const gradientElement = document.getElementById('gradient');
      if (!gradientElement) return;
      gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

      // Request the next animation frame
      window.requestAnimationFrame(loop);
    };

    // Start the animation loop
    window.requestAnimationFrame(loop);
  };

  useEffect(() => {
    BlogHeroSestionAnimation();
    return () => {};
  }, []);
  return (
    <>
      <div className="blog-herosection">
        <div className='all-hero-section-wraper'>
          <div className="herosection-heading-h1">
          <h1 className="hero-section-textbox-h1">BLOG</h1>
        </div>
        {/* <h1 className="vlog-herosection-h1">BLOG</h1> */}
        <div className="hero-section-top-text">
          <p className="hero-section-top-text-text-p1">
            Welcome to{' '}
            <Link href="#" className="tech-saraz-animation">
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              Tech SaraZ
            </Link>
          </p>
          <p className="hero-section-top-down-p-text">
            Where innovation meets expertise in web development
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeroSection;
