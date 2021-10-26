import styled from 'styled-components';

interface SlideProps {
  width: number;
  key: string;
}

const Slide = styled.div<SlideProps>`
  display: block;
  width: ${props => props.width}px;
  outline: currentcolor none medium;
`;

export default Slide;
