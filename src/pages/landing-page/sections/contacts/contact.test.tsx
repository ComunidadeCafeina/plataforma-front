import { render, screen } from '@testing-library/react';
import ContactSection from './contact';

describe('Contact', () => {
  window.open = jest.fn();

  it('should appear on both mobile and desktop', async () => {
    render(<ContactSection />);
    const contact = screen.getByText('contato@compiladoras.com.br.');
    expect(contact).toBeInTheDocument();
  });

  it('should have a link with "mailto"', async () => {
    render(<ContactSection />);
    const contact = screen.getByText('contato@compiladoras.com.br.');
    expect(contact).toHaveAttribute(
      'href',
      'mailto:contato@compiladoras.com.br',
    );
  });
});
