import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  flex: 1;
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 0 16px;
`;

const Home = (props) => {
  return (
    <div className="box">
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Home;
