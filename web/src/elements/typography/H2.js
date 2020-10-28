import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2 = styled.h2`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.caja};
    font-size: ${props => props.theme.size.h2};
    margin: 0 0 28px 0;


    @media ${props => props.theme.mediaBreakpoints.tablet} {
        font-size: 30px;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        font-size: 30px;
    }
`;

H2.propTypes = {
    secondary: PropTypes.bool,
};

export default H2;
