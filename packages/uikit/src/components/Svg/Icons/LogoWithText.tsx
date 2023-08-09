import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#222222";
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
     <g transform="translate(100.000000,225.000000) scale(0.500000,-0.500000)"
fill="primary" stroke="none">
<path d="M56 339 c-49 -38 -30 -99 40 -129 32 -14 44 -25 44 -40 0 -20 -5 -21
-52 -19 -50 3 -53 2 -53 -21 0 -23 4 -25 56 -28 70 -4 109 22 109 72 0 37 -26
65 -78 86 -48 19 -39 45 16 45 42 0 63 20 47 45 -12 19 -100 12 -129 -11z"/>
<path d="M1066 339 c-49 -38 -30 -99 40 -129 32 -14 44 -25 44 -40 0 -20 -5
-21 -52 -19 -50 3 -53 2 -53 -21 0 -23 4 -25 56 -28 70 -4 109 22 109 72 0 37
-26 65 -78 86 -48 19 -39 45 16 45 42 0 63 20 47 45 -12 19 -100 12 -129 -11z"/>
<path d="M242 158 l3 -133 28 -3 c26 -3 27 -2 27 42 0 44 0 44 28 37 57 -17
107 27 107 94 0 32 -6 50 -24 69 -27 28 -77 35 -100 14 -11 -10 -14 -10 -18 0
-3 6 -16 12 -29 12 l-25 0 3 -132z m128 62 c23 -44 -20 -99 -55 -70 -16 13
-19 47 -9 74 9 23 51 20 64 -4z"/>
<path d="M493 283 c-7 -2 -13 -13 -13 -23 0 -15 6 -17 39 -13 51 7 63 -13 15
-26 -46 -13 -74 -38 -74 -66 0 -39 29 -54 103 -53 l67 0 0 68 c0 89 -22 120
-83 119 -23 0 -48 -3 -54 -6z m75 -115 c-4 -31 -48 -39 -48 -10 0 20 12 30 38
31 8 1 12 -8 10 -21z"/>
<path d="M709 275 c-53 -29 -61 -105 -17 -153 17 -17 33 -22 70 -22 44 0 48 2
48 23 0 20 -4 23 -29 19 -23 -3 -33 1 -46 22 -28 43 8 96 55 81 16 -5 20 -2
20 19 0 23 -4 26 -37 26 -21 -1 -50 -7 -64 -15z"/>
<path d="M873 275 c-12 -8 -27 -30 -33 -49 -23 -71 18 -128 94 -128 53 0 68 8
64 30 -2 13 -13 16 -44 14 -27 -2 -45 2 -53 12 -12 14 -7 16 48 16 l61 0 0 35
c0 69 -80 110 -137 70z m75 -42 c2 -9 -7 -13 -27 -13 -30 0 -39 9 -24 24 11
10 46 3 51 -11z"/>
<path d="M1230 278 c0 -7 11 -49 24 -93 22 -75 25 -80 53 -83 28 -3 30 -1 43
55 l13 58 16 -57 c14 -53 17 -58 43 -58 26 0 29 5 53 83 31 102 31 107 1 107
-27 0 -31 -8 -42 -76 -8 -54 -13 -48 -34 34 -9 35 -15 42 -35 42 -20 0 -25 -7
-36 -55 -7 -30 -15 -55 -19 -55 -4 0 -11 24 -16 53 -8 47 -12 52 -36 55 -18 2
-28 -1 -28 -10z"/>
<path d="M1553 283 c-7 -2 -13 -13 -13 -23 0 -15 6 -17 39 -13 51 7 63 -13 15
-26 -46 -13 -74 -38 -74 -66 0 -39 29 -54 103 -53 l67 0 0 68 c0 89 -22 120
-83 119 -23 0 -48 -3 -54 -6z m75 -115 c-4 -31 -48 -39 -48 -10 0 20 12 30 38
31 8 1 12 -8 10 -21z"/>
<path d="M1732 158 l3 -133 28 -3 c26 -3 27 -2 27 42 0 44 0 44 28 37 57 -17
107 27 107 94 0 32 -6 50 -24 69 -27 28 -77 35 -100 14 -11 -10 -14 -10 -18 0
-3 6 -16 12 -29 12 l-25 0 3 -132z m128 62 c23 -44 -20 -99 -55 -70 -16 13
-19 47 -9 74 9 23 51 20 64 -4z"/>
</g>
       
    
      
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
