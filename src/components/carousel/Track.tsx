import styled from 'styled-components';
import { getSlideAnimation } from './helpers';

type Props = {
  previousActive: number;
  active: number;
  infiniteActive: number;
  width?: number;
  slideWidth?: number;
  slideOffset?: number;
};

const Track = styled.div.attrs<Props>(props => ({
  width: props.width,
  animation: getSlideAnimation(
    props.previousActive,
    props.active,
    props.infiniteActive,
    props.slideWidth,
    props.slideOffset,
  ),
}))<Props & { animation?: string }>`
  display: flex;
  flex-direction: row;
  position: relative;
  width: ${props => props.width}px;
  animation: ${props => props.animation} 0.5s forwards;
`;

export default Track;
