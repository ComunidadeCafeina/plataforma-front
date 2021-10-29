import React from 'react';

export function RightArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 9.25h15M8.5 1.75l7.5 7.5-7.5 7.5"
        stroke="#FE393B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
