import React from 'react';
import styled from 'styled-components';
import H4 from '../../elements/typography/H4';

const FooterWrapper = styled.div`
    background-color: ${props => props.theme.colours.lightGray};
    border-top: 2px solid ${props => props.theme.colours.darkNavy};
`;

const Text = styled(H4)`
    margin: 0 0 0 5%;
    padding: 30px 0;
`;

const Footer = () => (
    <FooterWrapper>
        <Text>aka studio © {(new Date().getFullYear())}</Text>
    </FooterWrapper>
);

export default Footer;

