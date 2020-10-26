import React from 'react';
import styled from 'styled-components';
import H2 from '../../elements/typography/H2';
import Ticker from 'nice-react-ticker';

const StripWrapper = styled.section`
    .styles_ticker__8iZE9 {
        background-color: ${props => props.theme.colours.green};
        height: 70px;
        width: 100vw;
        bottom: 0px;
        position: absolute;
        overflow: hidden;
        white-space: nowrap;
    }
`;

const Text = styled(H2)`
    margin: 5px;
`;

const StripTicker = () => {
    return(
        <StripWrapper>
            <Ticker>
                <Text>{' '}We’re a independent studio - made up of creative thinkers, designers and communicators who are driven to make memorable and meaningful connections between brands and their audience. We rely on cultural intuition and a belief that authenticity and simplicity is key.{' '}</Text>
            </Ticker>
        </StripWrapper>
    );
};

export default StripTicker;
