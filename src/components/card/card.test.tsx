import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Card } from './card';
import projects from '../../pages/landing-page/sections/projects/projects-mock';

type brandIconIDsType = {
  [key: string]: string;
};

const brandIconIDs: brandIconIDsType = {
  central: 'compiladoras-central-icon',
  jobs: 'jobs-icon',
  community: 'compiladoras-community-icon',
  literary: 'literary-caffeine-icon',
  programmer: 'programmer-central-icon',
};

const mockedProject = {
  brandIcon: 'community',
  title: 'Comunidade Compiladoras',
  description: 'Comunidade de apoio e engajamento',
  restrict: true,
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSeh8rIqDCip_i3B29Zbjmw-8dM80d8ins1qrjjuq5JjlcYW-Q/viewform',
};

describe('Card', () => {
  window.open = jest.fn();

  it('should have no accessibility issues', async () => {
    const { container } = render(<Card {...mockedProject} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(projects)('should render projects correctly', async project => {
    render(<Card {...project} />);

    expect(await screen.findByText(project.title)).toBeInTheDocument();
    expect(await screen.findByText(project.description)).toBeInTheDocument();

    const restrictIcon = await screen.queryByTestId('restrict-project-icon');
    const nonRestrictIcon = await screen.queryByTestId('right-arrow-icon');

    if (project.restrict) {
      expect(restrictIcon).toBeInTheDocument();
      expect(nonRestrictIcon).not.toBeInTheDocument();
    } else {
      expect(nonRestrictIcon).toBeInTheDocument();
      expect(restrictIcon).not.toBeInTheDocument();
    }

    expect(
      await screen.findByTestId(brandIconIDs[project.brandIcon]),
    ).toBeInTheDocument();

    const button = await screen.findByText('Entrar');
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith(project.link);
  });
});
