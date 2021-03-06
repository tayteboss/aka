import styled from 'styled-components';
import PropTypes from 'prop-types';

const H1 = styled.h1`
    color: ${props => props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.caja};
    font-size: ${props => props.theme.size.h1};
    margin: 0 0 32px 0;
    line-height: 0.95;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        font-size: 40px;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        font-size: 40px;
    }
`;

H1.propTypes = {
    secondary: PropTypes.bool,
};

export default H1;
