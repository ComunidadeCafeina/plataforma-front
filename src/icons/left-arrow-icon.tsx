import colors from '../styles/colors';

export const LeftArrowIcon = (
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element => (
  <svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 9.25H1M8.5 16.75L1 9.25l7.5-7.5"
      stroke={colors.lightRed}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
