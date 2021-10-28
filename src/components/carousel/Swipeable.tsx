/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { getSwipeDirection, isValidSwipe } from './helpers';

export enum SwipeDirection {
  Left = 'Left',
  Right = 'Right',
}

interface SwipeableProps {
  xMovementTrigger: number;
  onSwipe?: (direction: SwipeDirection) => void;
  children: React.ReactNode;
}

interface State {
  swiping: boolean;
  movementX: number;
  startX: number;
}

const initialState: State = {
  swiping: false,
  movementX: 0,
  startX: 0,
};

const Swipeable = ({
  xMovementTrigger,
  onSwipe,
  children,
}: SwipeableProps): React.ReactElement => {
  const [swipingState, setSwipingState] = useState(initialState);

  const onSwipeStart = (movementX: number, startX = 0) => {
    setSwipingState({
      swiping: true,
      movementX,
      startX,
    });
  };

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onSwipeStart(event.movementX);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    onSwipeStart(0, touch.clientX);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (swipingState.swiping) {
      if (
        isValidSwipe(
          swipingState.movementX + event.movementX,
          xMovementTrigger * 2,
        ) &&
        onSwipe
      ) {
        onSwipe(getSwipeDirection(swipingState.movementX));

        setSwipingState({
          ...swipingState,
          movementX: 0,
          swiping: false,
        });
      } else {
        setSwipingState({
          ...swipingState,
          movementX: swipingState.movementX + event.movementX,
        });
      }
    }
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (swipingState.swiping) {
      if (
        isValidSwipe(
          touch.clientX - swipingState.startX,
          xMovementTrigger * 2,
        ) &&
        onSwipe
      ) {
        onSwipe(getSwipeDirection(swipingState.movementX));

        setSwipingState({
          ...swipingState,
          movementX: 0,
          swiping: false,
        });
      } else {
        setSwipingState({
          ...swipingState,
          movementX: touch.clientX - swipingState.startX,
        });
      }
    }
  };

  const onSwipeEnd = () => {
    if (swipingState.swiping) {
      if (isValidSwipe(swipingState.movementX, xMovementTrigger) && onSwipe) {
        onSwipe(getSwipeDirection(swipingState.movementX));
      }

      setSwipingState({
        ...swipingState,
        movementX: 0,
        swiping: false,
      });
    }
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onSwipeEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onSwipeEnd}
      style={{
        cursor: 'pointer',
        transform: `translate3d(${swipingState.movementX}px, 0px, 0px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Swipeable;
