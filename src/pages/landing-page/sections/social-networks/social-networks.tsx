import { useEffect, useState } from 'react';
import {
  ContentContainer,
  Title,
  Description,
  SocialNetworkButton,
} from '../../../../components';
import { ButtonsContainer } from './social-networks.style';
import { SocialNetwork } from '../../../../models/social-networks';
import mockSocialNetworks from '../../../../mocks/constants/social-networks';

const SocialNetworksSection = (): React.ReactElement => {
  const [socialNetworks, setSocialNetworks] =
    useState<SocialNetwork[]>(mockSocialNetworks);

  useEffect(() => {
    fetch('/social-networks')
      .then(res => res.json())
      .then(data => setSocialNetworks(data));
  }, []);

  return (
    <ContentContainer id="redes-sociais">
      <Title>Nossas redes</Title>

      <Description>
        Você pode seguir nosso trabalho na sua rede preferida
      </Description>

      <ButtonsContainer>
        {socialNetworks.map(socialNetwork => (
          <SocialNetworkButton key={socialNetwork.text} {...socialNetwork} />
        ))}
      </ButtonsContainer>
    </ContentContainer>
  );
};

export default SocialNetworksSection;
