import styled, {keyframes} from 'styled-components';
import SurveyBottoms from '../SurveyBottoms';
import BLUE_BANNER from './fontBlue.png';
import YELLOW_BANNER from './fontYellow.png';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
	color: black;
	flex: 1;
`

const RotateContainer = styled.div`
`;

const rightMove = keyframes`
	100% {
		transform: translateX(calc(-1000 * 100%));
	}
`;

const leftMove = keyframes`
	0% {
		transform: translateX(calc(-1000 * 100%));
	}

	100% {
		transform: translateX(0);
	}
`

const Rotate = styled.div`
	display: flex;
	animation: ${rightMove} 2000s;
`;

const ReverseRotate = styled.div`
	display: flex;
	animation: ${leftMove} 2000s;
`;

const RotateBanner = () => {
	const blueImgs = [...Array(1000)].map((_, index) => <img height="100px" src={BLUE_BANNER} key={index} alt="" />)
	const yellowImgs = [...Array(1000)].map((_, index) => <img height="60px" src={YELLOW_BANNER} key={index} alt="" />)

  return (
    <Container>
			<RotateContainer>
				<Rotate>
					{blueImgs}
				</Rotate>
				<ReverseRotate>
					{yellowImgs}
				</ReverseRotate>
				<Rotate>
					{blueImgs}
				</Rotate>
				<ReverseRotate>
					{yellowImgs}
				</ReverseRotate>
				<Rotate>
					{blueImgs}
				</Rotate>
				<ReverseRotate>
					{yellowImgs}
				</ReverseRotate>
			</RotateContainer>
    </Container>

  )
}

export default RotateBanner;
