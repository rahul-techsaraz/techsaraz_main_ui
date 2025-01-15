<<<<<<< HEAD
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ClientSection from './Pages/LandingPages/ClientSection';
import BlogSection from './Pages/LandingPages/BlogSection';
import PortfolioSection from './Pages/LandingPages/PortfolioSection';
import { config, portfolio } from './Constant/config';
import { ToastProvider } from './Context/ToastContext';
import './style/style.css';
import './style/home-media.css';

=======
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import './style/style.css';
import './style/home-media.css';
import Footer from './Components/Footer/Footer';
import ClientSection from './Pages/LandingPages/ClientSection';
import BlogSection from './Pages/LandingPages/BlogSection';
import { config, portfolio } from './Constant/config';
import PortfolioSection from './Pages/LandingPages/PortfolioSection';
import { useEffect, useRef, useState } from 'react';
import { ToastProvider } from './Context/ToastContext';
>>>>>>> c6c8e139ca3e171495a5d464ef38c01faee01bc1
function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Refs to store the follower position
  const posX = useRef(0);
  const posY = useRef(0);
  const ease = 1;

  // Update mouse position state
  const setCoords = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // Easing and animation function for follower
  const easeTo = (follower) => {
    if (!follower) return;

    const followerBounds = follower.getBoundingClientRect();
    const dX = mouseX - (followerBounds.left + 16);
    const dY = mouseY - (followerBounds.top + 16);

    posX.current += dX * ease;
    posY.current += dY * ease;
  };

  // Request animation frame for smooth mouse follower movement

  const update = useCallback(
    (follower) => {
      easeTo(follower);
      follower.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
      requestAnimationFrame(() => update(follower)); // Continue updating position
    },
    [mouseX, mouseY],
  ); // update depends on mouseX and mouseY

  // Set up mousemove event listener and start animation
  useEffect(() => {
    const follower = document.querySelector('#mouse-follower');
    if (!follower) return;

    document.addEventListener('mousemove', setCoords);
    update(follower); // Start the animation loop

    return () => {
      document.removeEventListener('mousemove', setCoords);
    };
  }, [update]); // `update` is now included as a dependency

  return (
    <ToastProvider>
      <div className="full-section">
        <div id="mouse-follower" style={{ position: 'fixed' }}></div>
        <Header />
        <Outlet />
        <PortfolioSection portfolios={portfolio} />
        <ClientSection clients={config.LandingClientConfig.clients} />
        <BlogSection blogs={config.BlogConfig.blogs} />
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
