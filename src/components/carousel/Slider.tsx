/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { Props } from './Carousel';
import Track from './Track';
import Slide from './Slide';
import Swipeable, { SwipeDirection } from './Swipeable';
import { getPreSlideCount, getSliderStyles } from './helpers';

type SliderProps = Props & {
  previousActive: number;
  active: number;
  infiniteActive: number;
  onSwipe: (direction: SwipeDirection) => void;
};

const Slider = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;

const renderSlides = (
  children: React.ReactNode,
  slideCount: number,
  slideWidth = 0,
  slidesToShow: number,
  active: number,
  infinite?: boolean,
) => {
  const slides: React.ReactNode[] = [];
  const preClones: React.ReactNode[] = [];
  const postClones: React.ReactNode[] = [];

  React.Children.forEach(children, (child, index) => {
    slides.push(
      <Slide width={slideWidth} key={`slide${index}`}>
        {child}
      </Slide>,
    );

    if (infinite) {
      const preCloneNo = slideCount - index;

      if (
        preCloneNo <=
        getPreSlideCount({
          slideCount,
          slidesToShow,
          infinite,
        })
      ) {
        preClones.push(
          <Slide width={slideWidth} key={`slide-pre${-preCloneNo}`}>
            {child}
          </Slide>,
        );
      }

      const postCloneNo = index + slideCount;

      postClones.push(
        <Slide width={slideWidth} key={`slide-post${postCloneNo}`}>
          {child}
        </Slide>,
      );
    }
  });
  return [...preClones, ...slides, ...postClones];
};

const Component: React.FC<SliderProps & { onWindowResize: () => void }> = ({
  children,
  previousActive,
  active,
  infiniteActive,
  slidesToShow = 1,
  infinite,
  onWindowResize,
  swipeable,
  onSwipe,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideCount = React.Children.count(children);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [styles, setStyles] = useState(
    getSliderStyles({
      slideCount,
      slidesToShow,
      infinite,
      sliderWidth,
    }),
  );

  // Handle window resize
  useEffect(() => {
    const handleWindowResize = debounce(() => {
      onWindowResize();
      setSliderWidth(
        sliderRef.current ? Math.ceil(sliderRef.current.offsetWidth) : 0,
      );
    }, 100);

    // Sets initial dimensions
    setSliderWidth(
      sliderRef.current ? Math.ceil(sliderRef.current.offsetWidth) : 0,
    );

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [onWindowResize]);

  useEffect(() => {
    setStyles(
      getSliderStyles({
        slideCount,
        slidesToShow,
        infinite,
        sliderWidth,
      }),
    );
  }, [
    previousActive,
    active,
    infiniteActive,
    slidesToShow,
    infinite,
    sliderWidth,
  ]);

  return (
    <Slider ref={sliderRef}>
      <Swipeable
        swipeable={swipeable}
        xMovementTrigger={styles.slideWidth / 2}
        onSwipe={onSwipe}
      >
        <Track
          width={styles.trackWidth}
          previousActive={previousActive}
          active={active}
          infiniteActive={infiniteActive}
          slideWidth={styles.slideWidth}
          slideOffset={styles.slideOffset}
        >
          {renderSlides(
            children,
            slideCount,
            styles.slideWidth,
            slidesToShow,
            infiniteActive,
            infinite,
          )}
        </Track>
      </Swipeable>
    </Slider>
  );
};

export default Component;
