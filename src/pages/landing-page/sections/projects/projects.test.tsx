import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import ProjectsSection from './projects';

describe('ProjectsSection', () => {
  it('should have no accessibility issues', async () => {
    const { container } = render(<ProjectsSection />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not render carousel on mobile screen', async () => {
    global.innerWidth = 700;

    render(<ProjectsSection />);

    expect(
      await screen.findByText('Conheça nossos projetos'),
    ).toBeInTheDocument();

    expect(screen.queryByTestId('carousel-wrapper')).not.toBeInTheDocument();
  });

  it('should render carousel on tablet screen with 1 card', async () => {
    global.innerWidth = 721;

    render(<ProjectsSection />);

    expect(
      await screen.findByText('Conheça nossos projetos'),
    ).toBeInTheDocument();

    expect(screen.queryByTestId('carousel-wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('carousel-content-size-1')).toBeInTheDocument();
    expect(
      screen.queryByTestId('carousel-content-size-2'),
    ).not.toBeInTheDocument();
  });

  it('should render carousel on desktop screen with 2 cards', async () => {
    global.innerWidth = 992;

    render(<ProjectsSection />);

    expect(
      await screen.findByText('Conheça nossos projetos'),
    ).toBeInTheDocument();

    expect(screen.queryByTestId('carousel-wrapper')).toBeInTheDocument();
    expect(
      screen.queryByTestId('carousel-content-size-1'),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId('carousel-content-size-2')).toBeInTheDocument();
  });
});
