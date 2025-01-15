import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle';

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

  return (
    <>
      {isBreakPoint ? (
        <swiper-container
          slides-per-view={noOfSlidesPerView}
          space-between={20}
          breakpoints={JSON.stringify(breakPoint)}
          autoplay-delay={2000}
          pauseOnMouseEnter={true}
        >
          {children}
        </swiper-container>
      ) : (
        <swiper-container
          navigation-next-el={navigationNext}
          navigation-prev-el={navigationPrev}
          slides-per-view={noOfSlidesPerView}
          space-between={20}
          navigation={true}
          autoplay-delay={2000}
          pauseOnMouseEnter={true}
        >
          {children}
        </swiper-container>
      )}
    </>
  );
}
