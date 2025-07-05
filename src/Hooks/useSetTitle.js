export const useSetTitle = () => {
  const titleSetter = (path) => {
    switch (path) {
      case '/':
        document.querySelector('title').textContent = 'Tech SaraZ - Best Web designing Company in Bangalore';
        break;
      case '/aboutus':
        document.querySelector('title').textContent = 'About Us - Tech SaraZ';
        break;
      case '/services':
        document.querySelector('title').textContent = 'Our Services - Tech SaraZ';
        break;
      case '/services/web-development':
        document.querySelector('title').textContent = 'Web Development - Tech SaraZ';
        break;
      case '/services/web-development/web-application-development':
        document.querySelector('title').textContent =
          'Web Application Development - Tech SaraZ';
        break;
      case '/services/web-development/wordpress-development':
        document.querySelector('title').textContent = 'Wordpress Development - Tech SaraZ';
        break;
      case '/services/web-development/e-commerce':
        document.querySelector('title').textContent = 'E-Commerce - Tech SaraZ';
        break;
      case '/services/web-development/ui-ux-design':
        document.querySelector('title').textContent = 'UI UX Design - Tech SaraZ';
        break;
      case '/services/digital-merketing':
        document.querySelector('title').textContent = 'Digital Marketing - Tech SaraZ';
        break;
      case '/services/digital-merketing/social-marketing':
        document.querySelector('title').textContent = 'Social Media Marketing - Tech SaraZ';
        break;
      case '/services/digital-merketing/seo':
        document.querySelector('title').textContent = 'SEO - Tech SaraZ';
        break;
      case '/services/content-writing':
        document.querySelector('title').textContent = 'Content Writing - Tech SaraZ';
        break;
      case '/services/graphics-design':
        document.querySelector('title').textContent = 'Graphics Design - Tech SaraZ';
        break;
      case '/blog':
        document.querySelector('title').textContent = 'Digital marketing, Web development, AI and New trends - Blog - Tech Saraz';
        break;
      case '/contact':
        document.querySelector('title').textContent = 'Get in Touch with Tech Saraz: Your Partner in Digital Solutions';
        break;
      // default:
      //   toastTypeClass = 'info'; // Default to info if no type is passed
    }
  };
  return { titleSetter };
};
