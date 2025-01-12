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

export const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App />,
      children:[
        {
          path: "/",
          element: (
            <LandingContainer />
          ),
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path:"/services/web-development",
          element:<MainWebDevelopmentSection />,
          children: [
            {
              path:"",
              element:<TechnologyList />
            },
            {
              path:"web-application-development",
              element:<WebApplicationDevelopmentServices />
            },
            {
              path:"wordpress-development",
              element:<WordpressDevelopment />
            },
            {
              path:"e-commerce",
              element:<EcommerceDevelopment />
            },
            {
              path:"ui-ux-design",
              element:<UiUxDesign />
            }
          ]
        },
        {
          path: "/services/digital-merketing",
          element: <DigitalMarketing />,
          children: [
            {
              path:"",
              element:<Home />
            },
            {
              path:"social-marketing",
              element:<SocialMarketing />
            },
            {
              path:"seo",
              element:<SeoServices />
            },
          ]
        },
        {
          path: "services/content-writing",
          element: <ContentWriting />
        },
        {
          path: "services/graphics-design",
          element: <GraphicsDesign />
        }
        
    ],
}
  ]);