import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2 = styled.h2`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.h2};
    margin: 0 0 28px 0;
`;

H2.propTypes = {
    secondary: PropTypes.bool,
};

export default H2;
