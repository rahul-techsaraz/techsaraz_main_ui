export const SwiperResponsive = (breakpoints) => {
  const responsive = {
    1220: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    912: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  if (!breakpoints) {
    return responsive;
  }
  return { ...responsive, ...breakpoints };
};
