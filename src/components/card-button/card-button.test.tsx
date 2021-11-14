import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CardButton } from './card-button';

describe('CardButton', () => {
  it('should have no accessibility issues', async () => {
    const { container } = render(
      <CardButton text="Compiladoras de Cafeína" restrict onClick={() => {}} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render restrict projects button', async () => {
    render(
      <CardButton text="Compiladoras de Cafeína" restrict onClick={() => {}} />,
    );
    const restrictIcon = await screen.findByTestId('restrict-project-icon');
    expect(restrictIcon).toBeInTheDocument();
  });

  it('should render non restrict projects button', async () => {
    render(
      <CardButton
        text="Compiladoras de Cafeína"
        restrict={false}
        onClick={() => {}}
      />,
    );
    const nonRestrictIcon = await screen.findByTestId('right-arrow-icon');
    expect(nonRestrictIcon).toBeInTheDocument();
  });
});
