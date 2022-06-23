import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CntProp {
  cnt: number,
};

const Box = styled.div`
  width: 100%;
  margin-bottom: 40px;
`

const InBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  text-align: center;
  color: black;
`

const Button1 = styled.button`
  background-color: #FFD56A;
  border: none;
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 3.5px 2.6px;
  cursor: pointer;
  margin-top: 15px;
`

const Button2 = styled.button`
  background-color: #1E93FF;
  border: none;
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 3.5px 2.6px;
  cursor: pointer;
  margin-top: 11px;
`

const SurveyBottoms = ({
  cnt,
}: CntProp) => {
  return (
    <Box>
      <InBox>
        <div>
          <div>
            <Text>
              현재까지 총 {cnt}명이 참여했습니다
            </Text>
          </div>
          <Link to="/survey-home">
            <Button1>
              와랄라 잇 BTI 시작하기
            </Button1>
          </Link>
          <Link to="/roulette">
            <Button2>
              무지성 식사 룰렛 돌리기!
            </Button2>
          </Link>
        </div>
      </InBox>
    </Box>
  );
};

export default SurveyBottoms;