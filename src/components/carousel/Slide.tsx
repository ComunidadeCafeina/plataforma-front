import styled from 'styled-components';

type Props = {
  width: number;
  key: string;
  focused?: boolean;
  scaleOnFocus?: number;
};

const getScaleAnimation = (scaleOnFocus = 1, focused?: boolean) => {
  if (focused) {
    return `${scaleOnFocus}`;
  }

  return '1';
};

const Slide = styled.div<Props>`
  display: block;
  width: ${props => props.width}px;
  outline: currentcolor none medium;
  transform: scale(
    ${props => getScaleAnimation(props.scaleOnFocus, props.focused)}
  );
`;

export default Slide;
