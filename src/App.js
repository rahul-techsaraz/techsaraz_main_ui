import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import './style/style.css';
import './style/home-media.css'
import Footer from "./Components/Footer/Footer";
import ClientSection from "./Pages/LandingPages/ClientSection";
import BlogSection from "./Pages/LandingPages/BlogSection";
import { config } from "./Constant/config";
import PortfolioSection from "./Pages/LandingPages/PortfolioSection";
import { useEffect, useRef, useState } from "react";
function App() {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Refs to store the follower position
  const posX = useRef(0);
  const posY = useRef(0);

  const ease = 1;

  // Function to apply easing and calculate the follower's position
  const easeTo = (follower) => {
    if (!follower) return;

    const followerBounds = follower.getBoundingClientRect();

    // Calculate the distance between the follower and mouse position
    const dX = mouseX - (followerBounds.left + 16);
    const dY = mouseY - (followerBounds.top + 16);

    // Apply easing to the follower's position
    posX.current += dX * ease;
    posY.current += dY * ease;
  };

  // Update the follower's position using requestAnimationFrame
  const update = (follower) => {
    easeTo(follower);

    // Apply the transform style to move the follower
    follower.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;

    // Continue updating the position with the next animation frame
    requestAnimationFrame(() => update(follower));
  };

  // Function to update the mouse position on mouse move
  const setCoords = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    // Get the follower element
    const follower = document.querySelector("#mouse-follower");

    if (!follower) return;

    // Set up the mousemove event listener
    document.addEventListener("mousemove", setCoords);

    // Start the animation loop when the component mounts
    update(follower);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", setCoords);
    };
  }, [mouseX, mouseY]); // Only trigger effect when mouse position changes
  return (
    <>
        <div className="full-section">
        <div id="mouse-follower" style={{position:'fixed'}}></div>
          <Header />
          <Outlet />
          <PortfolioSection portfolios={config.LandingPortfolioConfig.portfolios} />
          <ClientSection clients={config.LandingClientConfig.clients} />
            <BlogSection blogs={config.BlogConfig.blogs} />
          <Footer />
        </div>
    </>

  );
}

export default App;
