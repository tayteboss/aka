import styled from 'styled-components';
import PropTypes from 'prop-types';

const H6 = styled.h6`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.h6};
    margin: 0 0 20px 0;
`;

H6.propTypes = {
    secondary: PropTypes.bool,
};

export default H6;
