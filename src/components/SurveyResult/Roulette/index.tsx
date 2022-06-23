import React from 'react';
import styled, { keyframes } from 'styled-components'
import ROULETTE from './roulette.png';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  animation: ${rotate} 3s linear infinite;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-top: 100px;
`;

const Roulette = () => {
  return (
    <div>
      <Title>
        룰렛 돌리기
      </Title>
      <Img width={400} src={ROULETTE} style={{ display: "flex", justifyContent: "center", marginTop: "80px" }} />
    </div>
  )
}

export default Roulette;
