import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CardButton } from './card-button';

describe('CardButton', () => {
  window.open = jest.fn();

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

  it('should render onClick function correctly', async () => {
    render(
      <CardButton
        text="Compiladoras de Cafeína"
        restrict={false}
        onClick={() => window.open('http://compiladoras.com.br/')}
      />,
    );
    const button = await screen.findByText('Compiladoras de Cafeína');
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith('http://compiladoras.com.br/');
  });
});
