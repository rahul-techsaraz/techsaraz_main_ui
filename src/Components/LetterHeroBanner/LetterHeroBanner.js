import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SocialMediaIcons = ({ icons }) => {
  return (
    <div className="content-writing-banner-animation">
      {icons.map((icon, index) => (
        <div key={index} className="rectrangle">
          <i className={`fa-brands fa-${icon}`} />
        </div>
      ))}
    </div>
  );
};
// Dummy commit
const LetterHeroBanner = ({
  headingText,
  socialIcons,
  subtitle,
  linkText,
  linkUrl,
}) => {
  // const splitText = headingText.split('');
  // console.log(headingText)
  // console.log(splitText);
  const headingTextSpliter = () => {
    const heading = [];
    const splitHeading = headingText.split(' ');
    if (splitHeading.length < 3) {
      return splitHeading.join(' ');
    } else if (splitHeading.length == 3) {
      heading.push(splitHeading[0] + ' ' + splitHeading[1]);
      heading.push(splitHeading[2]);
      return heading;
    } else if (splitHeading.length > 3) {
      heading.push(splitHeading[0] + ' ' + splitHeading[1]);
      heading.push(splitHeading[2] + ' ' + splitHeading[3]);
      return heading;
    }
  };

  return (
    <div className="web-development-banner">
      {/* Social Media Icons Section */}
      <SocialMediaIcons icons={socialIcons} />

      {/* About Us Text Section */}
      <div className="about-us-text-p">
        <p className="about-text-p1">
          Welcome to{' '}
          <Link to={linkUrl} className="tech-saraz-animation">
            <span className="tech-saraz-name-animation" />
            <span className="tech-saraz-name-animation" />
            <span className="tech-saraz-name-animation" />
            <span className="tech-saraz-name-animation" />
            {linkText}
          </Link>
        </p>
        {subtitle && <p className="about-text-p2">{subtitle}</p>}
      </div>

      {/* Hero Section Heading */}
      <div className="about-hero-section-text">
        <div className="heading-bounce-animation">
          <h1 className="animation-heading-text">
            {headingText.split(' ').length < 3 &&
              headingText.split('').map((letter, index) =>
                letter === ' ' ? (
                  <br key={index} />
                ) : (
                  <span key={index} className="animation-heading-span">
                    {letter}
                  </span>
                ),
              )}
            {headingText.split(' ').length >= 3 &&
              headingTextSpliter().map((letter, index) =>
                letter.split('').map((l, i) =>
                  index === 1 && i === 0 ? (
                    <>
                      <br key={i} />
                      <span key={i} className="animation-heading-span">
                        {l}
                      </span>
                    </>
                  ) : l === ' ' ? (
                    <span key={i}>&nbsp;</span>
                  ) : (
                    <span key={i} className="animation-heading-span">
                      {l}
                    </span>
                  ),
                ),
              )}
          </h1>
        </div>
      </div>
    </div>
  );
};

LetterHeroBanner.defaultProps = {
  headingText: 'WEB DEVELOPMENT',
  socialIcons: [
    'facebook-f',
    'twitter',
    'x-twitter',
    'instagram',
    'youtube',
    'react',
    'node-js',
    'php',
    'angular',
    'python',
  ],
  subtitle: 'Where innovation meets expertise in web development',
  linkText: 'Tech SaraZ',
  linkUrl: '#',
};
LetterHeroBanner.propTypes = {
  headingText: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  socialIcons: PropTypes.array.isRequired,
};
SocialMediaIcons.propTypes = {
  icons: PropTypes.array.isRequired,
};
export default LetterHeroBanner;
