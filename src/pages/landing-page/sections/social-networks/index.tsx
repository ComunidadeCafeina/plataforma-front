import React from 'react';
import {
  ContentContainer,
  Title,
  Description,
  SocialNetworkButton,
} from '../../../../components';
import { ButtonsContainer } from './social-networks.style';
import socialNetworks from './social-networks-mock';

const SocialNetworksSection = (): React.ReactElement => (
  <ContentContainer id="redes-sociais" className="smooth-scroll">
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

export default SocialNetworksSection;
