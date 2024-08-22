import React from "react";

export function CarbonCheckmarkFilled(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
      ></path>
      <path
        fill="none"
        d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"
      ></path>
    </svg>
  );
}

export function IconParkSolidBuy(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipSBuy0">
          <g fill="none" strokeWidth={4}>
            <path
              fill="#fff"
              fillRule="evenodd"
              stroke="#fff"
              strokeLinejoin="round"
              d="M6 15h36l-2 27H8z"
              clipRule="evenodd"
            ></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 19V6h16v13"
            ></path>
            <path stroke="#000" strokeLinecap="round" d="M16 34h16"></path>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBuy0)"></path>
    </svg>
  );
}
