import styled from 'styled-components';
import PropTypes from 'prop-types';

const H3 = styled.h3`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.h3};
    margin: 0 0 24px 0;
`;

H3.propTypes = {
    secondary: PropTypes.bool,
};

export default H3;
