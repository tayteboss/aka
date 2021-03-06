import React from 'react';
import styled from 'styled-components';
import logoGif from '../../assets/images/aka-rotate.gif';

const HeroWrapper = styled.section`
    background-color: ${props => props.theme.colours.black};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -3;
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Img = styled.img`
    width: 95%;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        width: 284%;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        width: 284%;
    }
`;

const Hero = () => {
    return (
        <HeroWrapper id='Top'>
            <LogoWrapper>
                <Img src={logoGif} alt='logo gif' />
            </LogoWrapper>
        </HeroWrapper>
    );
};

export default Hero;
