/* eslint-disable react/no-array-index-key */
import { IndicatorWrapper, Indicator } from './indicator.style';

interface IndicatorProps {
  items: number;
  slidesToShow: number;
  active: number;
  onClick: (index: number) => void;
}

const getNumberOfIndicators = (items: number, slidesToShow: number) => {
  if (slidesToShow < items) {
    return items;
  }

  return 1;
};

const Component = ({
  items,
  slidesToShow,
  active,
  onClick,
}: IndicatorProps): React.ReactElement => {
  return (
    <IndicatorWrapper>
      {[...Array(getNumberOfIndicators(items, slidesToShow))].map((_, i) => (
        <Indicator
          key={`carousel-indicator-${i}`}
          role="button"
          aria-label={`carousel-indicator-${i}`}
          data-testid={`carousel-indicator-${i}`}
          highlighted={i === active % items}
          onClick={() => onClick(i)}
        />
      ))}
    </IndicatorWrapper>
  );
};

export default Component;
