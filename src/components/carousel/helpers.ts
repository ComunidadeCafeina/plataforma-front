/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
import { keyframes } from 'styled-components';
import { Breakpoint, CarouselSettings } from './carousel';
import { SwipeDirection } from './swipeable';

interface SlideCountParams {
  slideCount: number;
  slidesToShow: number;
}

interface SliderStyleProps {
  sliderWidth: number;
  slideCount: number;
  slidesToShow?: number;
}

export const getPreSlideCount = ({
  slideCount,
  slidesToShow,
}: SlideCountParams) => {
  return slideCount < slidesToShow ? slidesToShow : slideCount;
};

export const getPostSlideCount = ({
  slideCount,
  slidesToShow,
}: SlideCountParams) => {
  return slideCount + slidesToShow + 1;
};

export const getTotalSlideCount = ({
  slideCount,
  slidesToShow,
}: SlideCountParams) => {
  if (slideCount === 1) {
    return 1;
  }

  return (
    getPreSlideCount({
      slideCount,
      slidesToShow,
    }) +
    getPostSlideCount({
      slideCount,
      slidesToShow,
    }) +
    slideCount
  );
};

export const getIndexForAction = (
  current: number,
  target: number,
  childrenCount: number,
) => {
  let previousActive = current;
  let active = target;
  let nextActive = target;

  if (nextActive < 0) {
    nextActive += childrenCount;

    if (previousActive < 0) {
      previousActive = current += childrenCount;
      active = nextActive;
    }
  } else if (nextActive > childrenCount - 1) {
    nextActive -= childrenCount;

    if (previousActive > childrenCount - 1) {
      previousActive = current -= childrenCount;
      active = nextActive;
    }
  }

  return {
    previousActive,
    active,
    nextActive,
  };
};

export const matchBreakpoint = (
  size: number,
  settings: CarouselSettings,
  breakpoints?: Breakpoint[],
) => {
  if (breakpoints && breakpoints.length > 0) {
    const breakpoint = breakpoints
      .sort((breakpointA, breakpointB) => breakpointB.size - breakpointA.size)
      .find(findBreakpoint => findBreakpoint.size < size);

    return breakpoint?.settings || breakpoints[breakpoints.length - 1].settings;
  }

  return settings;
};

export const getSwipeDirection = (movementX: number) => {
  if (movementX < 0) {
    return SwipeDirection.Left;
  }

  return SwipeDirection.Right;
};

export const isValidSwipe = (movement: number, trigger: number) =>
  trigger < Math.abs(movement);

export const getSliderStyles = ({
  slideCount,
  slidesToShow = 1,
  sliderWidth,
}: SliderStyleProps) => {
  let slideWidth;
  let slideOffset;
  let slidesToOffset = 0;
  let trackWidth;

  const totalSlideCount = getTotalSlideCount({
    slideCount,
    slidesToShow,
  });

  if (sliderWidth) {
    slideWidth = Math.ceil(sliderWidth / slidesToShow);

    slidesToOffset = -getPreSlideCount({
      slideCount,
      slidesToShow,
    });

    if (slidesToShow >= slideCount) {
      slidesToOffset += 1 + slidesToShow - slideCount;
    }

    slideOffset = slidesToOffset * slideWidth;
    trackWidth = totalSlideCount * slideWidth;
  }

  return {
    slideOffset,
    trackWidth,
    slideWidth: slideWidth || 0,
  };
};

const getTransform = (percentage: string, xValue: number) => `
    ${percentage}% {
        transform: translate3d(${xValue}px, 0px, 0px);
    }`;

export const getSlideAnimation = (
  previousActive: number,
  active: number,
  nextActive: number,
  slideWidth?: number,
  slideOffset?: number,
) => {
  let start = 0;
  let end = 0;

  if (slideWidth && (slideOffset || slideOffset === 0)) {
    const slideDelta = -1 * slideWidth;
    start = previousActive * slideDelta + slideOffset;
    end = active * slideDelta + slideOffset;

    if (nextActive !== active) {
      end = nextActive * slideDelta + slideOffset;
      start = nextActive > previousActive ? end + slideDelta : end - slideDelta;
    }
  }

  const startTransform = getTransform('0', start);
  const endTransform = getTransform('100', end);

  const animation = `
        ${startTransform}
        ${endTransform}
    `;
  return keyframes`${animation}`;
};
