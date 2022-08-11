import React from 'react';
import { StyledButton, Text } from './social-network-button.style';
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
  LinkedInIcon,
  PodcastIcon,
  GithubIcon,
  BlogIcon,
} from '../../icons';

type socialNetworksOptionType = {
  [key: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const socialNetworksOptions: socialNetworksOptionType = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
  linkedin: LinkedInIcon,
  podcast: PodcastIcon,
  github: GithubIcon,
  blog: BlogIcon,
};

interface SocialNetworkButtonProps {
  text: string;
  icon: keyof typeof socialNetworksOptions;
  link: string;
}

export const SocialNetworkButton = ({
  text,
  icon,
  link,
}: SocialNetworkButtonProps): React.ReactElement => {
  const handleClick = () => {
    window.open(link);
  };

  const Icon = () => {
    const Component = socialNetworksOptions[icon];
    return <Component />;
  };

  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      role="button"
      aria-label={`${text} link`}
    >
      <Icon /> <Text>{text}</Text>
    </StyledButton>
  );
};
