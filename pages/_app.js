import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../helpers/Theme';

import '../styles/normalize.css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.lightGrey};
    padding: 20px;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Righteous&display=swap');
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
