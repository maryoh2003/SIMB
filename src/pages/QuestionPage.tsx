import AnswerBubble from '../components/Bubble/AnswerBubble';
import QuestionBubble from '../components/Bubble/QuestionBubble';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Questions, Answers } from '../lib/staticData';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  .selected {
    overflow-y: auto;
    position: absolute;
    max-height: 470px;
    top: 0;
    left: 0;
    float: right;
    margin: auto;
    width: 390px;
    ::-webkit-scrollbar {
      display: none;
    }
    .ab {
      position: absoulte;
      right: 0;
      &:before {
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
  const [count, setCount] = useState(10);
  const [answers, setAnswers] = useState<answerType[]>([]);

  const nextId = useRef(0);
  let navigate = useNavigate();

  const onClickAnswer = (answer: string) => {
    const nextAnswer: answerType = {
      id: nextId.current,
      answer,
    };
    setAnswers(answers.concat(nextAnswer));

    if (count === 0) {
      navigate('/result');
    }

    nextId.current += 1;
    setCount(count - 1);
  };

  return (
    <Container>
      <div className="selected">
        {answers &&
          answers.map((answer, index) => (
            <>
              <QuestionBubble className="qb" input={Questions[index]} />
              <AnswerBubble className="ab" input={answers[index].answer} />
            </>
          ))}
      </div>
      <div className="question">
        <QuestionBubble input={Questions[10 - count]} />
        <ul>
          {Answers[10 - count].map((answer) => (
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
