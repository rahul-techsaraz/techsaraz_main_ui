export const reviewExpander = (isReadMore, review) => {
  if (review.length < 50) return review;
  if (!isReadMore) {
    return review.slice(0, 50).padEnd(53, '.');
  } else {
    return review;
  }
};
