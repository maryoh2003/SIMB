import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

type AnswerContainerProps = {
  answer: boolean;
};

const Container = styled.button<AnswerContainerProps>`
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
  img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 18.95px;
    width: 14.06px;
    ${({ answer }) =>
      !!answer &&
      css`
        filter: opacity(0.25) drop-shadow(0 4 4 0);
      `}
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
  color: white;
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  input: string;
  answer?: boolean;
}

const AnswerBubble: React.FC<IProps> = ({ input, answer = false }) => {
  return (
    <Container answer={answer}>
      <img src={'/blue.png'} />
      {input}
    </Container>
  );
};

export default AnswerBubble;
