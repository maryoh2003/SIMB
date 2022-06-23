import AnswerBubble from '../components/Bubble/AnswerBubble';
import QuestionBubble from '../components/Bubble/QuestionBubble';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Questions, Answers } from '../lib/staticData';

const Container = styled.div`
  .selected {
    position: absolute;
    top: 0;
    left: 0;
    ul {
      list-style: none;
    }
    li:nth-child(even) {
      float: right;
      margin: auto;
      .a {
        position: absolute;
        top: 72px;
      }
      &:after {
        float: right;
        flex-grow: 1;
      }
    }
  }

  .question {
    position: absolute;
    bottom: 0;
    width: 100%;
    ul {
      list-style: none;
      float: right;
      width: auto;
      .answer-bubble {
        padding-bottom: 6.71px;
        li {
          diplay: flex;
          width: 100%;
        }
      }
    }
  }
`;

type answerType = {
  id: number;
  answer: string;
};

const QuestionPage = () => {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState<answerType[]>([]);

  const nextId = useRef(0);

  const onClickAnswer = (answer: string) => {
    const nextAnswer: answerType = {
      id: nextId.current,
      answer,
    };
    setAnswers(answers.concat(nextAnswer));

    nextId.current += 1;
    setCount(count + 1);
  };

  return (
    <Container>
      <div className="selected">
        <ul>
          {answers &&
            answers.map((answer, index) => (
              <li>
                <QuestionBubble className="q" input={Questions[index]} />
                <AnswerBubble className="b" input={answers[index].answer} />
              </li>
            ))}
        </ul>
      </div>
      <div className="question">
        <QuestionBubble input={Questions[count]} />
        <ul>
          {Answers[count].map((answer) => (
            <li key={answer}>
              <div
                className="answer-bubble"
                onClick={() => onClickAnswer(answer)}
              >
                <AnswerBubble input={answer} answer={true} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default QuestionPage;
