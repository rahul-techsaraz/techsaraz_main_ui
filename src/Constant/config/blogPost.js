import { images } from '../images';

const {
  technicalWizardryOfOurWebDesignAgencyImage,
  blogs13Image,
  strategiesForEffectiveWebDesignByOurAgencyImage,
  howAgecisPutsYourAudienceFirstInEveryWebsiteProject,
  ensuresYourWebsiteRisesToTheTopOfSearchRankingsImage,
} = images;
export const blogPosts = [
  {
    id: 1,
    image: technicalWizardryOfOurWebDesignAgencyImage,
    author: 'Tech SaraZ',
    date: 'February 13, 2023',
    comments: 3,
    heading: 'Technical Wizardry Of Our Web Design Agency',
    paragraph:
      'Strategies for Effective Web Design by Our Agency. In the dynamic world of web design, where first impressions are currency and user experience reigns supreme, our agency has honed a repertoire of strategies that redefine digital landscapes...',
    readMoreLink: '/blog/technical-wizardry',
  },
  {
    id: 2,
    image: blogs13Image, // Another blog image
    author: 'Tech SaraZ',
    date: 'March 5, 2023',
    comments: 5,
    heading: 'How to Create Beautiful UI Designs',
    paragraph:
      'UI design is crucial to enhancing user experience. In this post, we explore the best practices for designing intuitive and engaging user interfaces that captivate users...',
    readMoreLink: '/blog/how-to-create-beautiful-ui-designs',
  },
  // Add more blog posts as needed
];

export const blogCategories = [
  { name: 'Business Solution', link: '/category/business-solution' },
  { name: 'Content Strategy', link: '/category/content-strategy' },
  { name: 'Digital Marketing', link: '/category/digital-marketing' },
  { name: 'Software Design', link: '/category/software-design' },
  { name: 'Technology', link: '/category/technology' },
  { name: 'Web Development', link: '/category/web-development' },
];

export const blogRecentPosts = [
  {
    image: howAgecisPutsYourAudienceFirstInEveryWebsiteProject,
    author: 'Tech SaraZ',
    heading: 'HOW AGECIS PUTS YOUR AUDIENCE',
    link: '/post/how-agecis-puts-your-audience',
  },
  {
    image: ensuresYourWebsiteRisesToTheTopOfSearchRankingsImage,
    author: 'Tech SaraZ',
    heading: 'ENSURES YOUR WEBSITE RISES TO',
    link: '/post/ensures-your-website-rises-to',
  },
  {
    image: strategiesForEffectiveWebDesignByOurAgencyImage,
    author: 'Tech SaraZ',
    heading: 'STRATEGIES FOR EFFECTIVE WEB DESIGN',
    link: '/post/strategies-for-effective-web-design',
  },
];

export const blogTags = [
  { name: 'Analytics', link: '/tag/analytics' },
  { name: 'Apps', link: '/tag/apps' },
  { name: 'Design', link: '/tag/design' },
  { name: 'Development', link: '/tag/development' },
  { name: 'Figma', link: '/tag/figma' },
  { name: 'Marketing', link: '/tag/marketing' },
  { name: 'Photoshop', link: '/tag/photoshop' },
  { name: 'Repair', link: '/tag/repair' },
  { name: 'SEO', link: '/tag/seo' },
  { name: 'Technology', link: '/tag/technology' },
];
