import React from 'react';
import Roulette from './components/SurveyResult/Roulette';
import QuestionPage from './pages/QuestionPage';
import MainPage from './pages/MainPage';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import SurveyHomePage from './pages/SurveyHomePage';

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
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/survey-home" element={<SurveyHomePage />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
