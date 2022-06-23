import styled from 'styled-components';
import palette from '../styles/palette';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: black;
  justify-content: center;
  .buttons {
    position: absolute;
    left: 40px;
    top: 135px;
    font: 16px;
    font-weight: bold;
    width: 311px;
    height: 23px;
    display: flex;
    justify-content: space-between;
  }
  img {
    height: 137px;
    width: auto;
    transform: translate(-50%, 50%);
  }
  .mainImage {
    position: absolute;
    top: 230px;
    left: 50%;
    right: 50%;
  }

  .result-eatBTI {
    font-size: 20px;
    top: 464px;
    position: relative;
    font-weight: bold;
    text-align: center;
  }
  .result-explain {
    position: relative;
    top: 497px;
    text-align: center;
    .result-explain-first {
      margin-bottom: 5px;
    }
    .result-explain-second {
      magin-bottom: 20px;
    }
    .result-sub-explain {
      margin-top: 40px;
      font-size: 12px;
    }
    .result-share {
      position: relative;
      display: flex;
      text-align: center;
      justify-content: space-between;
      width: 180px;
      height: 40px;
      left: 120px;
      .linkPng {
        img {
          width: 38px;
          height: 38px;
        }
      }
    }
  }
  button {
    position: relative;
    width: 346px;
    height: 58px;
    top: 550px;
    left: 22px;
    border-radius: 15px;
    color: white;
    border: none;
    background-color: ${palette.blue};
  }
`;

const ResultPage = () => {
  return (
    <Container>
      <div className="buttons">
        <div className="LinkFirst">처음으로</div>
        <div className="MyRecord">나의 기록 보기</div>
      </div>
      <img className="mainImage" src={'/bibimbap.png'} />
      <div className="result-eatBTI">LUSA-K</div>
      <div className="result-explain">
        <div className="result-explain-first">비빔밥을 추천합니다!</div>
        <div className="result-explain-second">한식을 좋아하는 당신!</div>
        <div className="result-sub-explain">친구에게 잇BTI 공유하기</div>
        <div className="result-share">
          <div className="linkPng">
            <img src="/facebook.png" />
          </div>
          <div className="linkPng">
            <img src="/twitter.png" />
          </div>
          <div className="linkPng">
            <img src="/kakao.png" />
          </div>
          <div className="linkPng">
            <img src="/link.png" />
          </div>
        </div>
      </div>
      <Link to="/roulette">
        <button type="button">무지성 식사 룰렛 돌리기!</button>
      </Link>
    </Container>
  );
};
export default ResultPage;
