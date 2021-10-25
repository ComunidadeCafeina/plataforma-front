import styled from 'styled-components';
import { getSlideAnimation } from './helpers';

type Props = {
  previousActive: number;
  active: number;
  infiniteActive: number;
  width?: number;
  center?: boolean;
  centerPadding?: number;
  slideWidth?: number;
  slideOffset?: number;
};

const Track = styled.div.attrs<Props>(props => ({
  width: props.width,
  centerPadding: props.center ? props.centerPadding || 0 : 0,
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
  padding: 0px ${props => props.centerPadding}px;
  width: ${props => props.width}px;
  animation: ${props => props.animation} 0.5s forwards;
`;

export default Track;
