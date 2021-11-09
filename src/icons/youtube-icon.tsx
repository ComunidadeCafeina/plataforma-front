import colors from '../styles/colors';

export const YouTubeIcon = (
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
      d="M18.005 15.733l-3.51-1.638c-.306-.142-.557.017-.557.356v3.085c0 .339.251.498.557.356l3.508-1.637c.308-.144.308-.378.002-.522zM15.5.993c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15 8.284 0 15-6.715 15-15 0-8.284-6.716-15-15-15zm0 21.094c-7.678 0-7.813-.692-7.813-6.093 0-5.402.135-6.094 7.813-6.094s7.813.692 7.813 6.094c0 5.401-.135 6.093-7.813 6.093z"
      fill={colors.black}
    />
  </svg>
);
