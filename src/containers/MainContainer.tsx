import styled from 'styled-components';
import RotateBanner from '../components/RotateBanner';
import SurveyBottoms from '../components/SurveyBottoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContainer = () => {
  return (
    <Container>
      <RotateBanner />
      <SurveyBottoms cnt={5} />
    </Container>
  );
};

export default MainContainer;
