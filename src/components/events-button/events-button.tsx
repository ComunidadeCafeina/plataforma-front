import React from 'react';
import { StyledButton } from './events-button.style';

interface EventsButtonProps {
  link: string;
  ariaLabel: string;
}

export const EventsButton = ({
  link,
  ariaLabel,
}: EventsButtonProps): React.ReactElement => {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      role="button"
      aria-label={ariaLabel}
    >
      Informações e inscrição
    </StyledButton>
  );
};
