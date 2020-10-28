import styled from 'styled-components';
import PropTypes from 'prop-types';

const H4 = styled.h4`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.h4};
    margin: 0 0 24px 0;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        font-size: 18px;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        font-size: 18px;
    }
`;

H4.propTypes = {
    secondary: PropTypes.bool,
};

export default H4;
