/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
import { keyframes } from 'styled-components';
import { Breakpoint, CarouselSettings } from './Carousel';
import { SwipeDirection } from './Swipeable';

type SlideCountParams = {
  slideCount: number;
  slidesToShow: number;
  infinite?: boolean;
};

type SliderStyleProps = {
  sliderWidth: number;
  slideCount: number;
  slidesToShow?: number;
  infinite?: boolean;
};

export const getPreSlideCount = ({
  slideCount,
  slidesToShow,
  infinite,
}: SlideCountParams) => {
  if (!infinite) {
    return 0;
  }

  return slideCount < slidesToShow ? slidesToShow : slideCount;
};

export const getPostSlideCount = ({
  slideCount,
  slidesToShow,
  infinite,
}: SlideCountParams) => {
  if (!infinite) {
    return 0;
  }
  return slideCount + slidesToShow + 1;
};

export const getTotalSlideCount = ({
  slideCount,
  slidesToShow,
  infinite,
}: SlideCountParams) => {
  if (slideCount === 1) {
    return 1;
  }

  return (
    getPreSlideCount({
      slideCount,
      slidesToShow,
      infinite,
    }) +
    getPostSlideCount({
      slideCount,
      slidesToShow,
      infinite,
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
  let infiniteActive = target;

  if (infiniteActive < 0) {
    infiniteActive += childrenCount;

    if (previousActive < 0) {
      previousActive = current += childrenCount;
      active = infiniteActive;
    }
  } else if (infiniteActive > childrenCount - 1) {
    infiniteActive -= childrenCount;

    if (previousActive > childrenCount - 1) {
      previousActive = current -= childrenCount;
      active = infiniteActive;
    }
  }

  return {
    previousActive,
    active,
    infiniteActive,
  };
};

export const canGoPrevious = (active: number, infinite?: boolean) => {
  if (infinite || active > 0) {
    return true;
  }

  return false;
};

export const canGoNext = (
  active: number,
  items: number,
  slidesToShow: number,
  infinite?: boolean,
) => {
  if (infinite || active < items - slidesToShow) {
    return true;
  }

  return false;
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
  infinite,
  sliderWidth,
}: SliderStyleProps) => {
  let slideWidth;
  let slideOffset;
  let slidesToOffset = 0;
  let trackWidth;

  const totalSlideCount = getTotalSlideCount({
    slideCount,
    slidesToShow,
    infinite,
  });

  if (sliderWidth) {
    slideWidth = Math.ceil(sliderWidth / slidesToShow);

    if (infinite) {
      slidesToOffset = -getPreSlideCount({
        slideCount,
        slidesToShow,
        infinite,
      });

      if (slidesToShow >= slideCount) {
        slidesToOffset += 1 + slidesToShow - slideCount;
      }
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
  infiniteActive: number,
  slideWidth?: number,
  slideOffset?: number,
) => {
  let start = 0;
  let end = 0;

  if (slideWidth && (slideOffset || slideOffset === 0)) {
    const slideDelta = -1 * slideWidth;
    start = previousActive * slideDelta + slideOffset;
    end = active * slideDelta + slideOffset;

    if (infiniteActive !== active) {
      end = infiniteActive * slideDelta + slideOffset;
      start =
        infiniteActive > previousActive ? end + slideDelta : end - slideDelta;
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
