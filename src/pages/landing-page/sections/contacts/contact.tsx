import { Content, Title, Description } from './contact.styles';
import { FullContentContainer } from '../../../../components';

const ContactSection = (): React.ReactElement => (
  <FullContentContainer>
    <Content>
      <Title>Contato</Title>

      <Description>
        Quer falar com a gente?
        <a
          href="mailto:contato@compiladoras.com.br"
          target="_blank"
          rel="noreferrer"
        >
          contato@compiladoras.com.br.
        </a>
      </Description>
    </Content>
  </FullContentContainer>
);

export default ContactSection;
