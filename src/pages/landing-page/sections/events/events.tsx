import { useEffect, useMemo, useState } from 'react';
import {
  ContentContainer,
  Title,
  EventsCard,
  Description,
  Carousel,
} from '../../../../components';
import { FullContentContainer } from './events.style';
import { Event } from '../../../../models/event';
import mockEvents from '../../../../mocks/constants/events';

const EventsSection = (): React.ReactElement => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const sizeScreen = window.innerWidth;

  const calculateWindowSize = (size: number): number => {
    if (size <= 720) {
      return 0;
    }

    if (size <= 992) {
      return 1;
    }

    return 2;
  };

  useMemo(() => calculateWindowSize(sizeScreen), [sizeScreen]);

  useEffect(() => {
    fetch('/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const EventsList = () => (
    <>
      {calculateWindowSize(sizeScreen) ? (
        events.map(event => <EventsCard {...event} />)
      ) : (
        <Carousel show={calculateWindowSize(sizeScreen)} infiniteLoop>
          {events.map(event => (
            <div>
              <EventsCard {...event} />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );

  return (
    <FullContentContainer id="eventos">
      <ContentContainer style={{ margin: '0 auto' }}>
        <Title>Próximos eventos</Title>

        <Description>
          Os melhores eventos de programação para você participar e evoluir sua
          carreira
        </Description>

        {events.length === 0 ? (
          <EventsList />
        ) : (
          <p className="error-message">Sem eventos no momento.</p>
        )}
      </ContentContainer>
    </FullContentContainer>
  );
};

export default EventsSection;
