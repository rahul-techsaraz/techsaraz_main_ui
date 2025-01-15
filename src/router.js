import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingContainer from "./Components/LandingContainer/LandingContainer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import MainWebDevelopmentSection from "./Components/Services/WebDevelopment";
import WebApplicationDevelopmentServices from "./Pages/Services/WebDevelopment/WebApplicationDevelopment/WebApplicationDevelopmentServices";
import TechnologyList from "./Pages/Services/WebDevelopment/TechnologyList";
import WordpressDevelopment from "./Pages/Services/WebDevelopment/WebApplicationDevelopment/WordpressDevelopment";
import EcommerceDevelopment from "./Pages/Services/WebDevelopment/WebApplicationDevelopment/EcommerceDevelopment";
import UiUxDesign from "./Pages/Services/WebDevelopment/WebApplicationDevelopment/UiUxDesign";
import DigitalMarketing from "./Components/Services/DigitalMarketing/DigitalMarketing";
import Home from "./Pages/Services/DigitalMarketing/Home";
import SocialMarketing from "./Components/Services/DigitalMarketing/SocialMarketing";
import SeoServices from "./Components/Services/DigitalMarketing/SeoServices";
import ContentWriting from "./Components/Services/ContentWriting/ContentWriting";
import GraphicsDesign from "./Components/Services/GraphicsDesign/GraphicsDesign";
import ContactUs from "./Components/ContactUs/ContactUs";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";  // Importing the error component
import Routes from "./Constant/routes";

const { 
  WEB_DEVELOPMENT,
  HOME,
  WORDPRESS_DEVELOPMENT,
  ECOMMERCE_DEVELOPMENT,
  UI_UX_DESIGN,
  SOCIAL_MARKETING,
  SEO,
  ABOUT_US,
  BLOG,
  CONTACT,
  SERVICES,
  DIGITAL_MARKETING,
  CONTENT_WRITING,
  GRAPHICS_DESIGN,
  WEB_APPLICATION_DEVELOPMENT
} = Routes;

// Defining route paths and nested routes
const webDevelopmentRoutes = [
  {
    path: "",
    element: <TechnologyList />,
  },
  {
    path: WEB_APPLICATION_DEVELOPMENT,
    element: <WebApplicationDevelopmentServices />,
  },
  {
    path: WORDPRESS_DEVELOPMENT,
    element: <WordpressDevelopment />,
  },
  {
    path: ECOMMERCE_DEVELOPMENT,
    element: <EcommerceDevelopment />,
  },
  {
    path: UI_UX_DESIGN,
    element: <UiUxDesign />,
  },
];

const digitalMarketingRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: SOCIAL_MARKETING,
    element: <SocialMarketing />,
  },
  {
    path: SEO,
    element: <SeoServices />,
  },
];

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,  // Set the error page at the root level
    children: [
      { path: HOME, element: <LandingContainer /> },
      { path: ABOUT_US, element: <AboutUs /> },
      { path: CONTACT, element: <ContactUs /> },
      { path: BLOG, element: <Blog /> },
      { path: SERVICES, element: <Services /> },

      {
        path: WEB_DEVELOPMENT,
        element: <MainWebDevelopmentSection />,
        children: webDevelopmentRoutes,
      },
      
      {
        path: DIGITAL_MARKETING,
        element: <DigitalMarketing />,
        children: digitalMarketingRoutes,
      },
      
      { path: CONTENT_WRITING, element: <ContentWriting /> },
      { path: GRAPHICS_DESIGN, element: <GraphicsDesign /> },
    ],
  },
]);
