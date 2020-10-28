import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Links = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;

const Link = styled.a`
    color: ${props => props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.caja};
    font-size: 40px;
    margin: 0;
    text-decoration: none;
    display: block;
`;

const Text = styled.button`
    background: none;
    border: none;
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: 20px;
    margin: 0;
    transition: margin 0.5s ease;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        margin: ${props => props.isOpen ? '40vh 0 0 0' : null};
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin: ${props => props.isOpen ? '40vh 0 0 0' : null};
    }
`;

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            {isOpen && (
                <Links>
                    <Fade cascade>
                        <Link href='#Studio' onClick={handleClick}>Studio</Link>
                        <Link href='#Contact' onClick={handleClick}>Contact</Link>
                    </Fade>
                </Links>
            )}
            <Text onClick={handleClick} isOpen={isOpen}>{isOpen ? 'close' : 'menu'}</Text>
        </>
    );
};

export default Menu;
