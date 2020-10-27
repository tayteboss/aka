import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/typography/H2';
import PortableText from '../../utilities/portableText';

const PanelWrapper = styled.section`
    background-color: ${props => props.theme.colours.lightGray};
    display: flex;
    border-top: 2px solid ${props => props.theme.colours.darkNavy};
    padding: 50px 0%;
`;

const ColumnOne = styled.div`
    margin-left: 5%;
    min-width: 20%;
`;

const ColumnTwo = styled.div`
    max-width: 30%;
    min-width: 30%;
    margin-right: 10%;
`;

const ColumnThree = styled.div`

`;

const Panel = ({ data }) => {
    console.log('paneldata', data);
    return(
        <PanelWrapper>
            <ColumnOne>
                <H2>{data.panelTitle}</H2>
            </ColumnOne>
            {data.threeColumnPanel ? (
                <ColumnTwo>
                    <PortableText blocks={data._rawPanelDescription} />
                </ColumnTwo>
            ) : (
                <ColumnTwo />
            )}
            <ColumnThree>
                <PortableText blocks={data._rawPanelList} />
            </ColumnThree>
        </PanelWrapper>
    );
};

export default Panel;

export const query = graphql`
  fragment ComponentPanelFragment on SanityPanels {
    panelTitle
    threeColumnPanel
    _rawPanelDescription
    _rawPanelList 
  }
`;
