import React from 'react';
import styled from 'styled-components';

interface CntProp {
  cnt: number,
};

const Box = styled.div`
`

const InBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Text = styled.div`
  text-align: center;
`

const Button1 = styled.button`
  background-color: #FFD56A;
  border: none;
  width: 15vw;
  height: 3vw;
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
  width: 15vw;
  height: 3vw;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 3.5px 2.6px;
  cursor: pointer;
  margin-top: 11px;
`

const SurveyMain = ({
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
          <div>
            <Button1>
              와랄라 잇 BTI 시작하기
            </Button1>
          </div>
          <div>
            <Button2>
              무지성 식사 룰렛 돌리기!
            </Button2>
          </div>
        </div>
      </InBox>
    </Box>
  );
};

export default SurveyMain;