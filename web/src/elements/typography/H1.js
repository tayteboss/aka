import styled from 'styled-components';
import PropTypes from 'prop-types';

const H1 = styled.h1`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.lightGray};
    font-family: ${props => props.theme.fonts.studioPro};
    font-size: ${props => props.theme.size.h1};
    margin: 0 0 32px 0;
`;

H1.propTypes = {
    secondary: PropTypes.bool,
};

export default H1;
