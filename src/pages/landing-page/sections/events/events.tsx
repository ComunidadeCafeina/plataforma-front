import { useEffect, useState } from 'react';
import {
  ContentContainer,
  Title,
  EventsCard,
  Description,
  Carousel,
  FullContentContainer,
} from '../../../../components';
import { Event } from '../../../../models/event';
import mockEvents from '../../../../mocks/constants/events';

const EventsSection = (): React.ReactElement => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const sizeScreen = window.innerWidth;

  useEffect(() => {
    fetch('/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <FullContentContainer style={{ padding: '96px 0 44px' }}>
      <ContentContainer style={{ margin: '0 auto' }}>
        <Title>Próximos eventos</Title>

        <Description>
          Os melhores eventos de programação para você participar e evoluir sua
          carreira
        </Description>

        {sizeScreen < 720 ? (
          events.map(event => <EventsCard {...event} />)
        ) : (
          <Carousel show={sizeScreen >= 992 ? 2 : 1} infiniteLoop>
            {events.map(event => (
              <div>
                <EventsCard {...event} />
              </div>
            ))}
          </Carousel>
        )}
      </ContentContainer>
    </FullContentContainer>
  );
};

export default EventsSection;
