import React from 'react';
import H3 from '../../elements/typography/H3';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

const Logo = styled(H3)`
    color: ${props => props.theme.colours.darkNavy};
`;

const NavItems = styled.div`
    display: flex;
`;

const NavLink = styled(H3)`
    margin-left: 40px;
    color: ${props => props.theme.colours.darkNavy};
`;

const Header = () => (
    <Nav>
        <Logo>aka studio</Logo>
        <NavItems>
            <a href='#studio'><NavLink>Studio</NavLink></a>
            <a href='#contact'><NavLink>Contact</NavLink></a>
        </NavItems>
    </Nav>
);

export default Header;

