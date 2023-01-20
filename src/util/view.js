export const view = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount + '회';
  }
  if (viewCount >= 1000 && viewCount < 10000) {
    return (viewCount / 10000).toFixed(1) + '천회';
  }
  if (viewCount >= 10000 && viewCount < 100000) {
    return (viewCount / 10000).toFixed(1) + '만회';
  }
  if (viewCount >= 100000) {
    return (viewCount / 10000).toFixed() + '만회';
  }
};
