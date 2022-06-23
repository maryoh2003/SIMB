import React from 'react';
import { Dispatch, SetStateAction } from "react";
import styled from 'styled-components';
import Roulette from '../SurveyResult/Roulette';

interface IdProp {
  id: string,
  setId: Dispatch<SetStateAction<string>>;
};

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #survey-nickname::placeholder {

  }
`

const Button = styled.button`
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

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: black;
`

const SubTitle = styled.div`
  text-align: center;
  color: black;
  margin-top: 8px;
`

const SurveyHome = ({
  id,
  setId
}: IdProp) => {
  return (
    <div>
      <Box>
        <div>
          <Title>
            와랄라 잇 BTI 시작
          </Title>
          <SubTitle>
            10번만 답하고 식사메뉴 정하기!
          </SubTitle>
          < div style={{ "fontSize": "14px" }}>별명을 입력해주세요</div>
          <input id='survey-nickname' type="text" value={id} onChange={e => setId(e.target.value)} placeholder="별명(8~12,한글,영문,특수문자 입력 가능)" style={{ "border": "none", "outline": "none", "fontSize": "16px", "width": "15vw", "height": "3vw", "backgroundColor": "#F8F8F8", "borderRadius": "10px", "marginTop": "10px", "marginBottom": "10px" }} />
          <div>
            <Button>
              시작하기
            </Button>
          </div>
        </div>
      </Box >
    </div>
  );
};

export default SurveyHome;