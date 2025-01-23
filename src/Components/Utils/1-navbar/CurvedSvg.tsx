const CurvedSvg = () => {
  return (
    <svg
      className="absolute top-0 z-0 left-0"
      width="147"
      height="450"
      viewBox="0 0 147 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          x="-145"
          y="-448"
          width="147"
          height="450"
          id="filter_1"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix_1" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix_1"
            result="Shape_2"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            in="SourceAlpha"
            result="HardAlpha_3"
          />
          <feOffset dx="0" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251 0"
          />
          <feBlend mode="normal" in2="Shape_2" result="InnerShadow_4" />
        </filter>
      </defs>
      <g fill="#64A3B4" fillRule="evenodd" filter="url(#filter_1)">
        <path
          id="Rectangle"
          d="M14.8984 0L147 0C127.007 27.3577 58 111.173 58 223.673C58 336.173 125.436 419.423 147 450L147 450L14.8984 450Q14.5327 450 14.1674 449.982Q13.8021 449.964 13.4381 449.928Q13.0742 449.892 12.7124 449.839Q12.3506 449.785 11.9919 449.714Q11.6332 449.642 11.2784 449.553Q10.9236 449.465 10.5736 449.358Q10.2237 449.252 9.8793 449.129Q9.53495 449.006 9.19705 448.866Q8.85916 448.726 8.52853 448.57Q8.19791 448.413 7.87536 448.241Q7.55281 448.068 7.23911 447.88Q6.92541 447.692 6.62131 447.489Q6.31721 447.286 6.02345 447.068Q5.72969 446.85 5.44697 446.618Q5.16425 446.386 4.89326 446.141Q4.62227 445.895 4.36365 445.636Q4.10504 445.378 3.85942 445.107Q3.61381 444.836 3.38179 444.553Q3.14977 444.27 2.9319 443.976Q2.71403 443.683 2.51084 443.379Q2.30765 443.075 2.11962 442.761Q1.9316 442.447 1.75919 442.125Q1.58678 441.802 1.43041 441.471Q1.27404 441.141 1.13408 440.803Q0.994115 440.465 0.870902 440.121Q0.747689 439.776 0.641522 439.426Q0.535354 439.076 0.446487 438.722Q0.357621 438.367 0.286269 438.008Q0.214918 437.649 0.161253 437.288Q0.107588 436.926 0.07174 436.562Q0.0358916 436.198 0.0179458 435.833Q0 435.467 0 435.102L0 14.8984Q0 14.5327 0.0179458 14.1674Q0.0358916 13.8021 0.07174 13.4381Q0.107588 13.0742 0.161253 12.7124Q0.214918 12.3506 0.286269 11.9919Q0.357621 11.6332 0.446487 11.2784Q0.535354 10.9236 0.641522 10.5736Q0.747689 10.2237 0.870902 9.8793Q0.994115 9.53495 1.13408 9.19705Q1.27404 8.85916 1.43041 8.52853Q1.58678 8.19791 1.75919 7.87536Q1.9316 7.55281 2.11962 7.23911Q2.30765 6.92541 2.51084 6.62131Q2.71403 6.31721 2.9319 6.02345Q3.14977 5.72969 3.38179 5.44697Q3.61381 5.16425 3.85942 4.89326Q4.10504 4.62227 4.36365 4.36365Q4.62227 4.10504 4.89326 3.85942Q5.16425 3.61381 5.44697 3.38179Q5.72969 3.14977 6.02345 2.9319Q6.31721 2.71403 6.62131 2.51084Q6.92541 2.30765 7.23911 2.11962Q7.55281 1.9316 7.87536 1.75919Q8.19791 1.58678 8.52853 1.43041Q8.85916 1.27404 9.19705 1.13408Q9.53495 0.994115 9.8793 0.870902Q10.2237 0.747689 10.5736 0.641522Q10.9236 0.535354 11.2784 0.446487Q11.6332 0.357621 11.9919 0.286269Q12.3506 0.214918 12.7124 0.161253Q13.0742 0.107588 13.4381 0.07174Q13.8021 0.0358916 14.1674 0.0179458Q14.5327 0 14.8984 0Z"
        />
        <path fill="#000000" fillRule="evenodd" />
      </g>
    </svg>
  );
};

export default CurvedSvg;
