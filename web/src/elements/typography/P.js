import styled from 'styled-components';

const P = styled.p`
    color: ${props => props.secondary ? props.theme.colours.salmon : props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.monumentReg};
    font-size: ${props => props.theme.size.p};
    margin: 0 0 32px 0;
`;

export default P;
