import {
  Container,
  Title,
  Description,
  Image,
  Content,
  DetailsLine,
} from './events-card.style';
import { EventsButton } from '../events-button';

interface EventsCardProps {
  image: string;
  title: string;
  description: string;
  value: number;
  date: string;
  link: string;
}

export const EventsCard = ({
  image,
  title,
  description,
  value,
  date,
  link,
}: EventsCardProps): React.ReactElement => {
  return (
    <Container>
      <Image image={image} />

      <Content>
        <div>
          <Title>{title}</Title>

          <Description>{description}</Description>
        </div>

        <div>
          <DetailsLine>
            <p>
              {value === 0
                ? 'Gratuito'
                : Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(value)}
            </p>
            <p>{date}</p>
          </DetailsLine>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EventsButton
              link={link}
              ariaLabel={`Botão para se inscrever no evento ${title}`}
            />
          </div>
        </div>
      </Content>
    </Container>
  );
};
