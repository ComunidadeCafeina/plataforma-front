import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  window.open = jest.fn();

  it('should appear on both mobile and desktop.', async () => {
    render(<Footer />);
    const footer = screen.getByText('Compiladoras de Cafeína @2021');
    expect(footer).toBeInTheDocument();
  });
});
