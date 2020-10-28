import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import H2 from '../../elements/typography/H2';
import PortableText from '../../utilities/portableText';
import Fade from 'react-reveal/Fade';

const PanelWrapper = styled.section`
    background-color: ${props => props.theme.colours.lightGray};
    display: flex;
    position: relative;
    /* border-top: 2px solid ${props => props.theme.colours.darkNavy}; */
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

const BorderTop = styled.div`
    height: 2px;
    width: 100vw;
    background-color: ${props => props.theme.colours.darkNavy};
    position: absolute;
    top: 0;
    left: 0;
`;

const Panel = ({ data, props }) => {
    console.log('props', props)
    return(
        <PanelWrapper id={data.panelTitle}>
            <BorderTop />
            <ColumnOne>
                <Fade>
                    <H2>{data.panelTitle}</H2>
                </Fade>
            </ColumnOne>
            {data.threeColumnPanel ? (
                <ColumnTwo>
                <Fade>
                    <PortableText blocks={data._rawPanelDescription} />
                </Fade>
                </ColumnTwo>
            ) : (
                <ColumnTwo />
                )}
            <ColumnThree>
                <Fade>
                    <PortableText blocks={data._rawPanelList} />
                </Fade>
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
