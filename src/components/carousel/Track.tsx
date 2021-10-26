import styled from 'styled-components';
import { getSlideAnimation } from './helpers';

interface TrackProps {
  previousActive: number;
  active: number;
  nextActive: number;
  width?: number;
  slideWidth?: number;
  slideOffset?: number;
}

const Track = styled.div.attrs<TrackProps>(props => ({
  width: props.width,
  animation: getSlideAnimation(
    props.previousActive,
    props.active,
    props.nextActive,
    props.slideWidth,
    props.slideOffset,
  ),
}))<TrackProps & { animation?: string }>`
  display: flex;
  flex-direction: row;
  position: relative;
  width: ${props => props.width}px;
  animation: ${props => props.animation} 0.5s forwards;
`;

export default Track;
