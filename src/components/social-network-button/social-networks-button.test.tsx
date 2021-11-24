import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { SocialNetworkButton } from './social-network-button';
import mockSocialNetworks from '../../mocks/constants/social-networks';

type socialNetworksType = {
  [key: string]: string;
};

const socialNetworksIDs: socialNetworksType = {
  instagram: 'instagram-icon',
  facebook: 'facebook-icon',
  twitter: 'twitter-icon',
  youtube: 'youtube-icon',
  linkedin: 'linkedin-icon',
  podcast: 'podcast-icon',
  github: 'github-icon',
  blog: 'blog-icon',
};

const mockedSocialNetwork = {
  text: 'Instagram',
  icon: 'instagram',
  link: 'https://www.instagram.com/compiladoras/',
};

describe('SocialNetworksButton', () => {
  window.open = jest.fn();

  it('should have no accessibility issues', async () => {
    const { container } = render(
      <SocialNetworkButton {...mockedSocialNetwork} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(mockSocialNetworks)(
    'should render social networks correctly',
    async socialNetwork => {
      render(<SocialNetworkButton {...socialNetwork} />);

      const button = await screen.findByText(socialNetwork.text);

      expect(button).toBeInTheDocument();

      expect(
        await screen.findByTestId(socialNetworksIDs[socialNetwork.icon]),
      ).toBeInTheDocument();

      fireEvent.click(button);
      expect(window.open).toHaveBeenCalledWith(socialNetwork.link);
    },
  );
});
