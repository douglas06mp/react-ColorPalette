export default {
  up() {},
  down(breakpoint) {
    const breakpoints = {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1500px'
    };
    return `@media (max-width: ${breakpoints[breakpoint]})`;
  }
};
