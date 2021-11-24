import React, { useState } from 'react';
import Slider from './Slider';
import Indicator from './Indicator';
import Arrow, { ArrowType } from './Arrow';
import { SwipeDirection } from './Swipeable';
import { getIndexForAction, matchBreakpoint } from './helpers';

import { CarouselWrapper, SliderWrapper } from './carousel.style';

export interface CarouselSettings {
  slidesToShow?: number;
}

export interface Breakpoint {
  size: number;
  settings: CarouselSettings;
}

export interface CarouselProps extends CarouselSettings {
  breakpoints?: Breakpoint[];
  children?: React.ReactNode;
}

const Component = ({
  slidesToShow = 1,
  breakpoints,
  children,
}: CarouselProps): React.ReactElement => {
  const childrenCount = React.Children.count(children);
  const carouselSettings = {
    slidesToShow,
  };
  const [activeSettings, setActiveSettings] = useState(
    matchBreakpoint(window.innerWidth, carouselSettings, breakpoints),
  );
  const [{ previousActive, active, nextActive }, setActive] = useState({
    previousActive: 0,
    active: 0,
    nextActive: 0,
  });

  return (
    <CarouselWrapper data-testid="carousel-wrapper">
      <SliderWrapper>
        <Arrow
          type={ArrowType.previous}
          onClick={() =>
            setActive(getIndexForAction(active, active - 1, childrenCount))
          }
        />
        <Slider
          previousActive={previousActive}
          active={active}
          nextActive={nextActive}
          onWindowResize={() =>
            setActiveSettings(
              matchBreakpoint(window.innerWidth, carouselSettings, breakpoints),
            )
          }
          onSwipe={(direction: SwipeDirection) => {
            let newActive = active;

            if (direction === SwipeDirection.Left) {
              newActive = active + 1;
            } else if (direction === SwipeDirection.Right) {
              newActive = active - 1;
            }

            setActive(getIndexForAction(active, newActive, childrenCount));
          }}
          {...activeSettings}
        >
          {children}
        </Slider>
        <Arrow
          type={ArrowType.next}
          onClick={() =>
            setActive(getIndexForAction(active, active + 1, childrenCount))
          }
        />
      </SliderWrapper>
      <Indicator
        items={childrenCount}
        slidesToShow={activeSettings.slidesToShow || slidesToShow}
        active={nextActive}
        onClick={index =>
          setActive(getIndexForAction(active, index, childrenCount))
        }
      />
    </CarouselWrapper>
  );
};

export default Component;
