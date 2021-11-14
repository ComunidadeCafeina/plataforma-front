import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Landing Page', async () => {
  render(<App />);
  const title = await screen.findByText(/compiladoras de cafeína/i);
  expect(title).toBeInTheDocument();
});
