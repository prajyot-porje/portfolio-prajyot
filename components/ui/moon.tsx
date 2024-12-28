import React from "react";

const Moon = () => {
  return (
    <svg
      width="1500"
      height="500"
      viewBox="0 0 1500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g opacity="0.5" filter="url(#filter0_f_29120_21457)">
        <ellipse
          cx="348.814"
          cy="460.231"
          rx="187.814"
          ry="159.465"
          fill="black"
        />
      </g>
      <mask
        id="mask0_29120_21457"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="161"
        y="125"
        width="478"
        height="478"
      >
        <circle cx="400" cy="364" r="239" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_29120_21457)">
        <rect
          x="42.0908"
          y="91.9258"
          width="744.168"
          height="558.323"
          fill="url(#pattern0_29120_21457)"
        />
      </g>
      <g style={{ mixBlendMode: "overlay" }} opacity="0.56">
        <circle
          cx="400"
          cy="364"
          r="239"
          fill="url(#paint0_radial_29120_21457)"
        />
      </g>
      <g style={{ mixBlendMode: "overlay" }} opacity="0.7">
        <circle
          cx="400"
          cy="364"
          r="239"
          fill="url(#paint1_radial_29120_21457)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_29120_21457"
          x="-139"
          y="0.766602"
          width="975.628"
          height="918.929"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_29120_21457"
          />
        </filter>
        <pattern
          id="pattern0_29120_21457"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_29120_21457"
            transform="scale(0.000440296 0.000586854)"
          />
        </pattern>
        <radialGradient
          id="paint0_radial_29120_21457"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(326.371 237.216) rotate(78.6189) scale(373.121)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_29120_21457"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(326.371 237.216) rotate(78.6189) scale(373.121)"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <image
          id="image0_29120_21457"
          width="2272"
          height="1704"
        />
      </defs>
    </svg>
  );
};

export default Moon;