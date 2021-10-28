import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CarouselProps } from './carousel';
import Track from './track';
import Slide from './slide';
import Swipeable, { SwipeDirection } from './swipeable';
import { getPreSlideCount, getSliderStyles } from './helpers';

interface SliderProps extends CarouselProps {
  previousActive: number;
  active: number;
  nextActive: number;
  onSwipe: (direction: SwipeDirection) => void;
  onWindowResize: () => void;
}

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
) => {
  const slides: React.ReactNode[] = [];
  const preClones: React.ReactNode[] = [];
  const postClones: React.ReactNode[] = [];

  React.Children.forEach(children, (child, index) => {
    slides.push(
      <Slide width={slideWidth} key={`slide${Math.random() * (100 - 1) + 1}`}>
        {child}
      </Slide>,
    );

    const preCloneNumber = slideCount - index;

    if (
      preCloneNumber <=
      getPreSlideCount({
        slideCount,
        slidesToShow,
      })
    ) {
      preClones.push(
        <Slide width={slideWidth} key={`slide-pre${-preCloneNumber}`}>
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
  });
  return [...preClones, ...slides, ...postClones];
};

const Component = ({
  children,
  previousActive,
  active,
  nextActive,
  slidesToShow = 1,
  onWindowResize,
  onSwipe,
}: SliderProps): React.ReactElement => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideCount = React.Children.count(children);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [styles, setStyles] = useState(
    getSliderStyles({
      slideCount,
      slidesToShow,
      sliderWidth,
    }),
  );

  // Handle window resize
  useEffect(() => {
    const handleWindowResize = () => {
      onWindowResize();
      setSliderWidth(
        sliderRef.current ? Math.ceil(sliderRef.current.offsetWidth) : 0,
      );
    };

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
        sliderWidth,
      }),
    );
  }, [
    previousActive,
    active,
    nextActive,
    slidesToShow,
    sliderWidth,
    slideCount,
  ]);

  return (
    <Slider ref={sliderRef}>
      <Swipeable xMovementTrigger={styles.slideWidth / 2} onSwipe={onSwipe}>
        <Track
          width={styles.trackWidth}
          previousActive={previousActive}
          active={active}
          nextActive={nextActive}
          slideWidth={styles.slideWidth}
          slideOffset={styles.slideOffset}
        >
          {renderSlides(children, slideCount, styles.slideWidth, slidesToShow)}
        </Track>
      </Swipeable>
    </Slider>
  );
};

export default Component;
