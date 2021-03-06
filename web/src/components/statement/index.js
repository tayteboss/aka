import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import H1 from '../../elements/typography/H1';

const StatementWrapper = styled.section`
    background-color: ${props => props.theme.colours.lightGray};
    display: flex;
    /* justify-content: center; */
    align-items: center;
    border-top: 2px solid ${props => props.theme.colours.darkNavy};
    z-index: 3;
    position: sticky;
    top: 0;
`;

const Text = styled(H1)`
    margin: 170px 0;
    width: 80%;
    margin-left: 5%;

    @media ${props => props.theme.mediaBreakpoints.mobile} {
        margin: 60px 20px;
        width: 100%;
    }
`;

const Statement = ({ data }) => {
    return(
        <StatementWrapper>
            <Text>{data.statement}</Text>
        </StatementWrapper>
    );
};

export default Statement;

export const query = graphql`
  fragment ComponentStatementFragment on SanityStatements {
    statement
  }
`;
