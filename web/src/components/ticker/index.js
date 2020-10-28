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

    .styles_ticker__8iZE9 {
        background-color: ${props => props.theme.colours.green};
        height: 70px;
        width: 100vw;
        bottom: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    .styles_ticker-list__1YeNe {
        animation: styles_ticker__8iZE9 30s infinite linear;
        width: auto;
    }
`;

const Text = styled(H2)`
    margin: 5px;
`;

const StripTicker = ({ data }) => {
    return(
        <StripWrapper>
            <Ticker>
                <Text>{' '}We’re a independent studio - made up of creative thinkers, designers and communicators who are driven to make memorable and meaningful connections between brands and their audience. We rely on cultural intuition and a belief that authenticity and simplicity is key.{' '}</Text>
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
