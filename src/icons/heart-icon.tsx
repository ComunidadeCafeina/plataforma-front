import React from 'react';

export const HeartIcon = (
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element => {
  return (
    <svg
      width={23}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.459 3.661c.35 1.433-.284 2.95-1.846 4.39-1.778 1.634-6.454 5.35-9.076 7.424l-.033.025-.034-.025C8.84 13.4 4.164 9.677 2.394 8.052.833 6.61.19 5.094.541 3.662.883 2.277 2.127 1.111 3.72.686A5.294 5.294 0 015.076.504c1.152 0 2.897.391 4.692 2.241l1.745 1.808 1.745-1.808C15.72.195 18.1.354 19.302.679c1.579.433 2.823 1.6 3.157 2.982z"
        fill="#fff"
      />
    </svg>
  );
};
