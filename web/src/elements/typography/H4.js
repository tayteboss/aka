import styled from 'styled-components';
import PropTypes from 'prop-types';

const H4 = styled.h4`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.lightGray};
    font-family: ${props => props.theme.fonts.studioPro};
    font-size: ${props => props.theme.size.h4};
    margin: 0 0 24px 0;
`;

H4.propTypes = {
    secondary: PropTypes.bool,
};

export default H4;
