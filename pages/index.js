import styled from 'styled-components';
import MainContent from '../components/layout/MainContent';
import { TABLET, DESKTOP, colors } from '../helpers/Theme';

const Blurb = styled.section`
  margin: 0 auto;
  max-width: 75vw;
  padding: 20px 0;
  text-align: justify;

  @media (min-width: ${TABLET}px) {
    max-width: 80vw;
    padding: 40px 0;
  }

  @media (min-width: ${DESKTOP}px) {
    padding: 60px 0;
  }
`;

const Home = () => {
  return (
    <MainContent>
      <Blurb>
        <p>Hello, my name is Adam and I'm a Software Engineer based in New York.</p>
        <p>
          Since 2019, I've worked at Walmart on the nascent <a href="https://www.inhome.walmart.com">InHome Delivery</a> team.
          Before that, I worked in fast-paced agency environments at <a href="https://www.rubensteintech.com/">RubensteinTech</a> and <a href="https://www.bluestate.co/">Blue State</a>.
        </p>
        <p>Outside the workplace, I enjoy cooking, lifting, gaming, long walks, and quality time.</p>
      </Blurb>
    </MainContent>
  );
};

export default Home;
