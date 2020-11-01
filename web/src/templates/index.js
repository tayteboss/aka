import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../shared/baseCSS';
import Theme from '../shared/theme';
import Layout from '../layouts';
import Header from '../components/header';
// import Hero from '../components/hero';
import CanvasThree from '../components/canvasThree';
import Components from '../components/components';
import Footer from '../components/footer';
import Cursor from '../elements/cursor';
// import ReactFluidScroll from 'react-fluid-scroll';

const App = ({ data }) => {
    const {
        title,
        metaDescription,
        components,
    } = data.allSanityPage.edges[0].node

    return (
        <>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Layout title={title} metaDescription={metaDescription} />
            <Header />
            <CanvasThree /> 
            <Components components={components} />
            <Footer />
            <Cursor />
          </ThemeProvider>
        </>
    )
};

export default App;

export const query = graphql`
  query($pageId: String) {
    allSanityPage(
      filter: { pageId: { eq: $pageId }}
    ) {
      edges {
        node {
          pageId
          metaDescription
          title
          slug {
              current
          }
          ...ComponentsFragment
        }
      }
    }
  }
`;