import styled from 'styled-components';
import PropTypes from 'prop-types';

const H5 = styled.h5`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.h5};
    margin: 0 0 24px 0;
`;

H5.propTypes = {
    secondary: PropTypes.bool,
};

export default H5;
