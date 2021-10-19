import styled from 'styled-components';

interface StyledSVGProps {
  width: string;
  height: string;
}

export const StyledSVG = styled.svg<StyledSVGProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
