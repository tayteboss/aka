import React from 'react';
import H3 from '../../elements/typography/H3';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Menu from '../menu';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${props => props.isTabletMobile ? '23px 20px' : '20px'};
    position: fixed;
    top: 0;
    z-index: ${props => props.isTabletMobile ? 10 : -1};
    background-color: #000;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        border-bottom: 1px solid ${props => props.theme.colours.darkNavy};
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        border-bottom: 1px solid ${props => props.theme.colours.darkNavy};
    }
`;

const Logo = styled(H3)`
    color: ${props => props.theme.colours.darkNavy};

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        margin: 0;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin: 0;
    }
`;

const NavItems = styled.div`
    display: flex;
`;

const NavLink = styled.a`
    color: ${props => props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.h3};
    margin: 0 0 0 40px;
    color: ${props => props.theme.colours.darkNavy};
    text-decoration: none;


    @media ${props => props.theme.mediaBreakpoints.tablet} {
        font-size: 20px;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        font-size: 20px;
    }
`;

const Header = () => {
    const isTabletMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return(
        <Nav isTabletMobile={isTabletMobile}>
            <Logo>aka studio</Logo>
            {isTabletMobile ? (
                <Menu />
            ) : (
                <NavItems>
                    <NavLink href='#Studio'>Studio</NavLink>
                    <NavLink href='#Contact'>Contact</NavLink>
                </NavItems>
            )}
        </Nav>
    );
};

export default Header;
