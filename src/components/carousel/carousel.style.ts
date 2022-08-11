import styled from 'styled-components';
import colors from '../../styles/colors';
import shadows from '../../styles/shadows';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
`;

export const Arrow = styled.button`
  width: 63px;
  height: 63px;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  background: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  box-sizing: border-box;
  box-shadow: ${shadows.default};
  cursor: pointer;
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
`;

export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  &.show-2 > * {
    width: 50%;
  }
`;
