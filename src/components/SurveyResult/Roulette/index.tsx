import styled, {keyframes} from 'styled-components'
import ROULETTE from './roulette.png';

const rotate  = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  animation: ${rotate} 3s linear infinite;
`;

const Roulette = () => {
  return <Img width={600} src={ROULETTE} />
}

export default Roulette;
