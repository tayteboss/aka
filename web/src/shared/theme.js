const Theme = {
  name: 'AKA Theme',
  colours: {
    darkNavy: '#454d52',
    lightGray: '#dedede',
    green: '#70ee54',
    red: '#ff0000',
    blue: '#1c3391',
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
    p: '23px',
    h6: '18px',
    h5: '21px',
    h4: '23px',
    h3: '27px',
    h2: '45px',
    h1: '86px',
  },
  mediaBreakpoints: {
    large: '(min-width: 1440px)',
    desktop: '(min-width: 769px) and (max-width: 1439px)',
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
