import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import H2 from '../../elements/typography/H2';
import Malarquee from 'react-malarquee';

const green = css`
    background-color: ${props => props.theme.colours.green};
`;

const red = css`
    background-color: ${props => props.theme.colours.red};
`;

const blue = css`
    background-color: ${props => props.theme.colours.blue};
`;

const StripWrapper = styled.section`
    width: 100vw;
    overflow: hidden;
    z-index: 3;
    height: 70px;
    margin-top: calc(100vh - 70px);

    @media ${props => props.theme.mediaBreakpoints.tablet} {
        height: 60px;
        margin-top: calc(90vh - 60px);
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        height: 60px;
        margin-top: calc(85vh - 60px);
    }

    span {
        height: 70px;
        bottom: 0px;
        overflow: hidden;
        white-space: nowrap;


        ${props => {
            switch (props.colour) {
                case 'green':
                    return green;
                case 'red':
                    return red;
                case 'blue':
                    return blue;
                default:
                    return green;
            }
        }}

        @media ${props => props.theme.mediaBreakpoints.tablet} {
            height: 60px;
        }

        @media ${props => props.theme.mediaBreakpoints.mobile} {
            height: 60px;
        }
    }
`;

const Text = styled(H2)`
    margin: 5px;
    padding-bottom: 20px;
    color: ${props => props.colour === 'blue' ? '#dedede' : '#454d52'};

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin: 9px;
    }
`;

const StripTicker = ({ data }) => {
    const colours = ['green', 'red', 'blue'];
    const [colour, setColour] = useState('green');
    const [index, setIndex] = useState(1);
    const maxIndex = colours.length;

    const colourSelect = () => {
        setIndex(index + 1);
        setColour(colours[index]);
        if (index >= maxIndex) {
            setIndex(1);
        }
    };

    return(
        <StripWrapper id='Studio' colour={colour} onClick={colourSelect}>
            <Malarquee rate={150}>
                <Text>{data.tickerMessage}</Text>
            </Malarquee>
        </StripWrapper>
    );
};

export default StripTicker;

export const query = graphql`
  fragment ComponentTickerFragment on SanityTickers {
    tickerMessage
  }
`;
