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
    padding: 50px 0%;
    z-index: 5;
    position: sticky;
    top: 0;
    height: ${props => props.isContact ? 'calc(100vh - 89px)' : null};

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        flex-direction: column;
        padding: 10px 20px;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        flex-direction: column;
        padding: 10px 20px;
    }
`;

const ColumnOne = styled.div`
    margin-left: 5%;
    margin-right: 20px;
    min-width: 20%;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        margin-left: 0;
        padding: 15px 20px;
        min-width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 2px solid ${props => props.theme.colours.darkNavy};
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin-left: 0;
        padding: 15px 20px;
        min-width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 2px solid ${props => props.theme.colours.darkNavy};
    }
`;

const Text = styled(H2)`
    color: ${props => props.theme.colours.darkNavy};
    font-family: ${props => props.theme.fonts.caja};
    font-size: ${props => props.theme.size.h2};
    margin: 0 0 28px 0;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        font-size: 30px;
        margin: 0;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        font-size: 30px;
        margin: 0;
    }
`;

const ColumnTwo = styled.div`
    max-width: 30%;
    min-width: 30%;
    margin-right: 10%;
    margin-top: 12px;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        max-width: 60%;
        min-width: 60%;
        margin-right: 0;
        margin-top: ${props => props.isContact ? null : '135px'};
        margin-bottom: ${props => props.isContact ? '55px' : null};
        order: ${props => props.isContact ? 5 : 0};
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        max-width: 60%;
        min-width: 60%;
        margin-right: 0;
        margin-top: ${props => props.isContact ? null : '135px'};
        margin-bottom: ${props => props.isContact ? '55px' : null};
        order: ${props => props.isContact ? 5 : null};
    }
`;

const ColumnThree = styled.div`
    max-width: 320px;
    margin-top: 12px;

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        margin-bottom: ${props => props.isContact ? null : '55px'};
        margin-top: ${props => props.isContact ? '135px' : null};
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin-bottom: ${props => props.isContact ? null : '55px'};
        margin-top: ${props => props.isContact ? '135px' : null};
    }
`;

const BorderTop = styled.div`
    height: 2px;
    width: 100vw;
    background-color: ${props => props.theme.colours.darkNavy};
    position: absolute;
    top: 0;
    left: 0;
`;

const Panel = ({ data }) => {
    const isContact = data.panelTitle === 'Contact';
    return(
        <PanelWrapper id={data.panelTitle} isContact={isContact}>
            <BorderTop />
            <ColumnOne>
                <Fade>
                    <Text>{data.panelTitle}</Text>
                </Fade>
            </ColumnOne>
            {data.threeColumnPanel ? (
                <ColumnTwo isContact={isContact}>
                <Fade>
                    <PortableText blocks={data._rawPanelDescription} />
                </Fade>
                </ColumnTwo>
            ) : (
                <ColumnTwo />
                )}
            <ColumnThree isContact={isContact}>
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
