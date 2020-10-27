import { graphql } from 'gatsby';

export const query = graphql`
    fragment ComponentsFragment on SanityPage {
        components {
            __typename
            ... on SanityStatements {
                ...ComponentStatementFragment
            }
            ... on SanityTickers {
                ...ComponentTickerFragment
            }
            ... on SanityPanels {
                ...ComponentPanelFragment
            }
        }
    }
`;
