const Theme = {
  name: 'AKA Theme',
  colours: {
    darkNavy: '#454d52',
    lightGray: '#dedede',
    green: '#70ee54',
    black: '#000',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
  fonts: {
    caja: 'Cajatype-Regular',
    monumentReg: 'MonumentGrotesk-Regular',
    monumentMed: 'MonumentGrotesk-Medium',
  },
  size: {
    small: '12px',
    p: '14px',
    h6: '18px',
    h5: '21px',
    h4: '23px',
    h3: '27px',
    h2: '45px',
    h1: '90px',
  },
  mediaBreakpoints: {
    desktop: '(min-width: 769px)',
    tablet: '(min-width: 480px) and (max-width: 768px)',
    mobile: '(max-width: 479px)',
  },
  layout: {
    maxContainerWidth: 1440,
  },
  transitionSpeed: {
    default: '.3s',
    fast: '.1s',
  },
}
export default Theme
