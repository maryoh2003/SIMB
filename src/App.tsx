import React from 'react';
import Roulette from './components/SurveyResult/Roulette';
import QuestionPage from './pages/QuestionPage';
import MainPage from './pages/MainPage';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import SurveyHomePage from './pages/SurveyHomePage';
import ResultPage from './pages/ResultPage';

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  margin: auto;
  box-shadow: 2px 2px 2px 1.8px rgba(0, 0, 0, 0.2);
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
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
