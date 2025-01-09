import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import './style/style.css';
import './style/home-media.css'
import Footer from "./Components/Footer/Footer";
import ClientSection from "./Pages/LandingPages/ClientSection";
import BlogSection from "./Pages/LandingPages/BlogSection";
import { config } from "./Constant/config";
import PortfolioSection from "./Pages/LandingPages/PortfolioSection";
function App() {
  return (
    <>
        <div className="full-section">
        <div id="mouse-follower"></div>
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
