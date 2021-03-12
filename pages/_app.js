import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../helpers/Theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inconsolata', monospace;
    background-color: ${colors.lightGrey};
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <style>
          {/* "Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well" */}
          @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        </style>
      </Head>
      <GlobalStyles />
      
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
