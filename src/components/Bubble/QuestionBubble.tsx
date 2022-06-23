import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  .Answer {
    display: inline-block;
    position: relative;
    padding: 20.14px 16.22px 18.39px 16.35px;
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    width: auto;
    border-radius: 54px;
    background-color: ${palette.gray};
    z-index: 10;
    color: black;
    img {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 18.95px;
      width: 14.06px;
      transform: scaleX(-1);
    }
  }
  .div {
    flex-grow: 1;
  }
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  input: string;
  selected?: boolean;
}

const QuestionBubble: React.FC<IProps> = ({ input, selected }) => {
  return (
    <Container>
      <div className="Answer">
        <img src={'/gray.png'} />
        {input}
      </div>
      <div className="null" />
    </Container>
  );
};

export default QuestionBubble;
