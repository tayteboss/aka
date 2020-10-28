import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import H2 from '../../elements/typography/H2';
import Ticker from 'nice-react-ticker';

const StripWrapper = styled.section`
    width: 100vw;
    overflow: hidden;
    z-index: 3;
    height: 70px;
    margin-top: calc(100vh - 70px);


    @media ${props => props.theme.mediaBreakpoints.tablet} {
        height: 60px;
    }

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        height: 60px;
    }

    .styles_ticker__8iZE9 {
        background-color: ${props => props.theme.colours.green};
        height: 70px;
        width: 100vw;
        bottom: 0px;
        overflow: hidden;
        white-space: nowrap;

        @media ${props => props.theme.mediaBreakpoints.tablet} {
            height: 60px;
        }

        @media ${props => props.theme.mediaBreakpoints.mobile} {
            height: 60px;
        }
    }

    .styles_ticker-list__1YeNe {
        animation: styles_ticker__8iZE9 30s infinite linear;
        width: auto;
    }
`;

const Text = styled(H2)`
    margin: 5px;

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin: 9px;
    }
`;

const StripTicker = ({ data }) => {
    return(
        <StripWrapper>
            <Ticker>
                <Text>{' '}{data.tickerMessage}{' '}</Text>
            </Ticker>
        </StripWrapper>
    );
};

export default StripTicker;

export const query = graphql`
  fragment ComponentTickerFragment on SanityTickers {
    tickerMessage
  }
`;
