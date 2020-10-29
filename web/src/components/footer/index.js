import React from 'react';
import styled from 'styled-components';
import H4 from '../../elements/typography/H4';
import ArrowIcon from '../../assets/images/arrow.svg';

const FooterWrapper = styled.section`
    background-color: ${props => props.theme.colours.lightGray};
    border-top: 2px solid ${props => props.theme.colours.darkNavy};
    display: flex;
    justify-content: space-between;
`;

const Text = styled(H4)`
    margin: 0 0 0 5%;
    padding: 30px 0;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        margin: 0 0 0 20px;
    }

    @media ${props => props.theme.mediaBreakpoints.phone} {
        margin: 0 0 0 20px;
    }
`;

const Arrow = styled.img`
    width: 20px;
    margin: 0 20px 0 0;
`;

const Footer = () => (
    <FooterWrapper>
        <Text>aka studio © {(new Date().getFullYear())}</Text>
        <a href='#Studio' className='arrow'><Arrow src={ArrowIcon} /></a>
    </FooterWrapper>
);

export default Footer;

