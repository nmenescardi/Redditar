const isMobile = () =>
  window.matchMedia && window.matchMedia('(max-width: 768px)').matches;

export default isMobile;
