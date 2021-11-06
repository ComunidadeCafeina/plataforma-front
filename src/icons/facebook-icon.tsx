import colors from '../styles/colors';

export const FacebookIcon = (
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.5 16.077c0 7.458 5.416 13.66 12.5 14.917V20.16H9.25v-4.166H13V12.66c0-3.75 2.416-5.833 5.834-5.833 1.082 0 2.25.167 3.332.333v3.834H20.25c-1.834 0-2.25.916-2.25 2.083v2.917h4l-.666 4.166H18v10.834c7.084-1.258 12.5-7.458 12.5-14.917 0-8.296-6.75-15.083-15-15.083S.5 7.78.5 16.077z"
      fill={colors.black}
    />
  </svg>
);
