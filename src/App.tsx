import React from 'react';
import QuestionPage from './pages/QuestionPage';
import MainPage from './pages/MainPage';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 100vh;
  margin: auto;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <QuestionPage /> */}
        <MainPage />
      </Container>
    </>
  );
}

export default App;
