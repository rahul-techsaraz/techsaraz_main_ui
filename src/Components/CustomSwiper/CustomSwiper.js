import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import PropTypes from 'prop-types';

export default function CustomSwiper({
  navigation,
  navigationNext,
  navigationPrev,
  noOfSlidesPerView,
  children,
  isBreakPoint,
  breakPoint,
}) {
  useEffect(() => {
    register();
  }, []);

  // Common swiper container props
  const commonProps = {
    'navigation-next-el': navigationNext,
    'navigation-prev-el': navigationPrev,
    navigation: navigation,
    slidesPerView: noOfSlidesPerView,
    spaceBetween: 20,
    'autoplay-delay': 2000,
    pauseOnMouseEnter: true,
  };

  // Conditional props based on `isBreakPoint` or `isPagination`
  const breakpointProps = isBreakPoint
    ? {
        breakpoints: JSON.stringify(breakPoint),
      }
    : {
        breakpoints: '',
      };

  return (
    <swiper-container {...commonProps} {...breakpointProps}>
      {children}
    </swiper-container>
  );
}

// Prop validation
CustomSwiper.propTypes = {
  navigation: PropTypes.bool,
  navigationPrev: PropTypes.string,
  navigationNext: PropTypes.string,
  noOfSlidesPerView: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isBreakPoint: PropTypes.bool.isRequired,
  breakPoint: PropTypes.object,
};
