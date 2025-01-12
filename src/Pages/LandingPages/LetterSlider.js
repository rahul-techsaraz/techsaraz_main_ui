import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const LetterSlider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = splideRef.current.splide;

    // Listen for the 'moved' event to track the active slide
    splide.on('moved', () => {
      // Get all non-cloned slides
      const allSlides = splide.Components.Slides.get(); // This method gets all original slides (excluding clones)

      // Find the active slide using the current index
      const activeSlide = allSlides[splide.index];

      // Remove 'is-active' class from all slides
      // allSlides.forEach((slide) => {
      // slide?.slide.classList.remove('is-active');
      // });

      // Add the 'is-active' class to the current active slide
      if (activeSlide) {
        console.log(activeSlide?.slide?.classList);
        activeSlide?.slide?.classList.add('is-active');
      }

      // Find cloned slides (those with the class 'splide__slide--clone')
      const clonedSlides = splide.Components.Slides.get().filter((slide) =>
        slide?.slide.classList.contains('splide__slide--clone'),
      );

      // Log the cloned slides (optional)
      clonedSlides.forEach((clonedSlide) => {
        console.log('Cloned Slide:', clonedSlide);
      });
    });

    // Set initial active slide when the component is mounted
    const initialSlides = splide.Components.Slides.get();
    const initialActiveSlide = initialSlides[splide.index];
    if (initialActiveSlide) {
      console.log({ initialActiveSlide });
      initialActiveSlide?.slide?.classList.add('is-active');
    }
  }, []);

  return (
    <div className="slider-container">
      <Splide
        ref={splideRef}
        options={{
          type: 'loop', // Enable looping for cloning
          perPage: 3, // Show 3 slides per page
          autoplay: true, // Enable autoplay
          interval: 3000, // Autoplay interval (in ms)
          arrows: true, // Enable arrows
          pagination: false, // Disable pagination
          gap: '1rem', // Gap between slides
        }}
      >
        <SplideSlide>
          <img
            src="https://via.placeholder.com/300x200?text=Slide+1"
            alt="Slide 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://via.placeholder.com/300x200?text=Slide+2"
            alt="Slide 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://via.placeholder.com/300x200?text=Slide+3"
            alt="Slide 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://via.placeholder.com/300x200?text=Slide+4"
            alt="Slide 4"
          />
        </SplideSlide>
        {/* Add more slides as needed */}
      </Splide>
    </div>
  );
};

export default LetterSlider;
