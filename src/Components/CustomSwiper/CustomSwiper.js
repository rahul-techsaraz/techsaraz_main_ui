import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import PropTypes from 'prop-types';

export default function CustomSwiper({
  noOfSlidesPerView,
  children,
  isBreakPoint,
  navigationNext,
  navigationPrev,
  isPagination,
  breakPoint,
}) {
  useEffect(() => {
    register();
  }, []);

  // Common swiper container props
  const commonProps = {
    slidesPerView: noOfSlidesPerView,
    spaceBetween: 20,
    autoplayDelay: 2000,
    pauseOnMouseEnter: true,
  };

  // Conditional props based on `isBreakPoint` or `isPagination`
  const breakpointProps = isBreakPoint
    ? {
        breakpoints: JSON.stringify(breakPoint),
      }
    : {
        navigationNextEl: navigationNext,
        navigationPrevEl: navigationPrev,
        navigation: true,
        ...(isPagination && { pagination: true }), // Conditionally add pagination
      };

  return (
    <swiper-container {...commonProps} {...breakpointProps}>
      {children}
    </swiper-container>
  );
}

// Prop validation
CustomSwiper.propTypes = {
  noOfSlidesPerView: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isBreakPoint: PropTypes.bool.isRequired,
  navigationNext: PropTypes.string,
  navigationPrev: PropTypes.string,
  isPagination: PropTypes.bool,
  breakPoint: PropTypes.object,
};

CustomSwiper.defaultProps = {
  navigationNext: '',
  navigationPrev: '',
  isPagination: false,
  breakPoint: {},
};
