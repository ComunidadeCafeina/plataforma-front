import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Indicator from './Indicator';
import Arrow, { ArrowType } from './Arrow';
import { SwipeDirection } from './Swipeable';
import {
  canGoNext,
  canGoPrevious,
  getIndexForAction,
  matchBreakpoint,
} from './helpers';

export type CarouselSettings = {
  slidesToShow?: number;
  center?: boolean;
  centerPadding?: number;
  infinite?: boolean;
  swipeable?: boolean;
};

export type Breakpoint = {
  size: number;
  settings: CarouselSettings;
};

export type Props = CarouselSettings & {
  breakpoints?: Breakpoint[];
};

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Component: React.FC<Props & { debug?: boolean }> = ({
  swipeable = true,
  slidesToShow = 1,
  centerPadding = 0,
  breakpoints,
  center,
  infinite,
  debug,
  children,
}) => {
  const childrenCount = React.Children.count(children);
  const carouselSettings = {
    center,
    infinite,
    slidesToShow,
    swipeable,
    centerPadding,
  };
  const [activeSettings, setActiveSettings] = useState(
    matchBreakpoint(window.innerWidth, carouselSettings, breakpoints),
  );
  const [{ previousActive, active, infiniteActive }, setActive] = useState({
    previousActive: 0,
    active: 0,
    infiniteActive: 0,
  });

  return (
    <CarouselWrapper>
      <SliderWrapper>
        <Arrow
          type={ArrowType.previous}
          onClick={() =>
            setActive(getIndexForAction(active, active - 1, childrenCount))
          }
          disabled={!canGoPrevious(active, activeSettings.infinite)}
        />
        <Slider
          previousActive={previousActive}
          active={active}
          infiniteActive={infiniteActive}
          onWindowResize={() =>
            setActiveSettings(
              matchBreakpoint(window.innerWidth, carouselSettings, breakpoints),
            )
          }
          debug={debug}
          onSwipe={(direction: SwipeDirection) => {
            let newActive = active;

            if (
              direction === SwipeDirection.Left &&
              canGoNext(
                active,
                childrenCount,
                activeSettings.slidesToShow || slidesToShow,
                activeSettings.infinite,
              )
            ) {
              newActive = active + 1;
            } else if (
              direction === SwipeDirection.Right &&
              canGoPrevious(active, activeSettings.infinite)
            ) {
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
          disabled={
            !canGoNext(
              active,
              childrenCount,
              activeSettings.slidesToShow || slidesToShow,
              activeSettings.infinite,
            )
          }
        />
      </SliderWrapper>
      <Indicator
        items={childrenCount}
        slidesToShow={activeSettings.slidesToShow || slidesToShow}
        infinite={activeSettings.infinite}
        active={infiniteActive}
        onClick={index =>
          setActive(getIndexForAction(active, index, childrenCount))
        }
      />
    </CarouselWrapper>
  );
};

export default Component;
