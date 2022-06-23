import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

type AnswerContainerProps = {
  answer: boolean;
};

const Container = styled.div<AnswerContainerProps>`
  display: flex;
  margin-bottom: 10px;
  .null {
    flex-grow: 1;
  }
  .Answer {
    display: inline-block;
    position: relative;
    padding: 20.14px 16.22px 18.39px 16.35px;
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    width: auto;
    border-radius: 54px;
    border: none;
    cursor: pointer;
    margin-left: 24px;
    color: white;
    img {
      z-index: -1;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 18.95px;
      width: 14.06px;
    }

    ${({ answer }) =>
      !!answer &&
      css`
        background-color: ${palette.skyblue};
      `}
    ${({ answer }) =>
      !answer &&
      css`
        background-color: ${palette.blue};
      `}

      &:hover {
      background-color: ${palette.blue};
    }
  }
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  input: string;
  answer?: boolean;
}

const AnswerBubble: React.FC<IProps> = ({ input, answer = false }) => {
  return (
    <Container answer={answer}>
      <div className="null" />
      <div className="Answer">
        {answer ? <img src={'/skyblue.png'} /> : <img src={'/blue.png'} />}
        {input}
      </div>
    </Container>
  );
};

export default AnswerBubble;

{
  /* <div className="Answer">
<img src={'/gray.png'} />
{input}
</div>
<div className="null" /> */
}
