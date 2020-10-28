import React from 'react';
import H3 from '../../elements/typography/H3';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: -1;
`;

const Logo = styled(H3)`
    color: ${props => props.theme.colours.darkNavy};
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
`;

const Header = () => {
    return(
        <Nav>
            <Logo>aka studio</Logo>
            <NavItems>
                <NavLink href='#Studio'>Studio</NavLink>
                <NavLink href='#Contact'>Contact</NavLink>
            </NavItems>
        </Nav>
    );
};

export default Header;
