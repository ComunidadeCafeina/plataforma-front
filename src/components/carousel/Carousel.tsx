import React, { useState, useEffect } from 'react';
import { LeftArrowIcon, RightArrowIcon } from '../../icons';
import {
  Arrow,
  Container,
  CarouselContainer,
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContent,
} from './carousel.style';
import Indicator from './components/indicator/indicator';

interface CarouselProps {
  children: React.ReactNode[];
  show?: number;
  infiniteLoop?: boolean;
}

export const Carousel = ({
  children,
  show = 1,
  infiniteLoop = false,
}: CarouselProps): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show,
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    const output = [];
    for (let index = 0; index < show; index += 1) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    const output = [];
    for (let index = 0; index < show; index += 1) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <CarouselContainer>
      <CarouselWrapper data-testid="carousel-wrapper">
        {(isRepeating || currentIndex > 0) && (
          <Container>
            <Arrow
              onClick={prev}
              role="button"
              aria-label="Carousel arrow left"
            >
              <LeftArrowIcon />
            </Arrow>
          </Container>
        )}
        <CarouselContentWrapper
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <CarouselContent
            data-testid={`carousel-content-size-${show}`}
            className={`show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </CarouselContent>
        </CarouselContentWrapper>
        {(isRepeating || currentIndex < length - show) && (
          <Container>
            <Arrow
              onClick={next}
              role="button"
              aria-label="Carousel arrow right"
            >
              <RightArrowIcon />
            </Arrow>
          </Container>
        )}
      </CarouselWrapper>

      <Indicator
        items={children.length}
        slidesToShow={show}
        active={infiniteLoop ? currentIndex - show : currentIndex}
        onClick={index => setCurrentIndex(infiniteLoop ? show + index : index)}
      />
    </CarouselContainer>
  );
};
