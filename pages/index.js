import styled from 'styled-components';
import MainContent from '../components/layout/MainContent';

const Blurb = styled.section``;

const Home = () => {
  return (
    <MainContent>
      <Blurb>
        <p>Hello, my name is Adam and I'm a Software Engineer based in New York.</p>
        <p>Since 2019, I've worked at Walmart on the nascent <a href="https://www.inhome.walmart.com">InHome Delivery</a> team, making families' lives easier by taking grocery shopping off their weekly to-do list.</p>
        <p>Before that, I worked in fast-paced agency environments, bringing vibrant designs to life for Am Law 100 law firms at <a href="https://www.rubensteintech.com/">RubensteinTech</a> and driving funding and messaging for political campaigns at <a href="https://www.bluestate.co/">Blue State</a>.</p>
        <p>On the side, I've done some freelance work and spent three years volunteer teaching AP Computer Science at Frederick Douglass Academy in Harlem through for <a href="https://www.microsoft.com/en-us/teals">Microsoft TEALS.</a></p>
      </Blurb>
    </MainContent>
  );
};

export default Home;
