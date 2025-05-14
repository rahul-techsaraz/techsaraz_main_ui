export const useSetTitle = () => {
  const titleSetter = (path) => {
    switch (path) {
      case '/':
        document.querySelector('title').textContent = 'Home';
        break;
      case '/aboutus':
        document.querySelector('title').textContent = 'About';
        break;
      case '/services':
        document.querySelector('title').textContent = 'Services';
        break;
      case '/services/web-development':
        document.querySelector('title').textContent = 'Web Development';
        break;
      case '/services/web-development/web-application-development':
        document.querySelector('title').textContent =
          'Web Application Development';
        break;
      case '/services/web-development/wordpress-development':
        document.querySelector('title').textContent = 'Wordpress Development';
        break;
      case '/services/web-development/e-commerce':
        document.querySelector('title').textContent = 'E-Commerce';
        break;
      case '/services/web-development/ui-ux-design':
        document.querySelector('title').textContent = 'UI UX Design';
        break;
      case '/services/digital-merketing':
        document.querySelector('title').textContent = 'Digital Marketing';
        break;
      case '/services/digital-merketing/social-marketing':
        document.querySelector('title').textContent = 'Social Media Marketing';
        break;
      case '/services/digital-merketing/seo':
        document.querySelector('title').textContent = 'SEO';
        break;
      case '/services/content-writing':
        document.querySelector('title').textContent = 'Content Writing';
        break;
      case '/services/graphics-design':
        document.querySelector('title').textContent = 'Graphics Design';
        break;
      case '/blog':
        document.querySelector('title').textContent = 'Blog';
        break;
      case '/contact':
        document.querySelector('title').textContent = 'Contact';
        break;
      // default:
      //   toastTypeClass = 'info'; // Default to info if no type is passed
    }
  };
  return { titleSetter };
};
