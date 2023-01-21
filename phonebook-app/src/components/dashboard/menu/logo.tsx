/* #region  [- import -] */
import { FC, } from "react";
import React from "react";
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

/* #endregion */

const Logo: FC = (): JSX.Element => {
  const LogoSVG = () => (
    <svg
      width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M0 250 l0 -250 250 0 250 0 0 250 0 250 -250 0 -250 0 0 -250z m475
0 l0 -175 -48 -3 c-46 -3 -48 -2 -46 20 2 13 -1 23 -6 23 -5 0 -8 -10 -7 -22
3 -23 2 -23 -118 -23 -120 0 -121 0 -118 23 1 12 -2 23 -7 24 -6 1 -9 -9 -7
-23 3 -24 2 -25 -45 -22 l-48 3 -3 165 c-1 90 0 170 3 177 3 11 51 13 227 11
l223 -3 0 -175z"/>
        <path d="M40 250 l0 -160 24 0 c19 0 25 6 28 27 3 24 8 28 33 28 25 0 30 -4
33 -27 l3 -28 89 0 89 0 3 28 c5 40 61 40 66 0 3 -22 9 -28 28 -28 l24 0 0
160 0 160 -210 0 -210 0 0 -160z m145 103 c17 -16 17 -58 0 -95 -5 -12 -3 -18
6 -18 17 0 49 -30 49 -47 0 -10 -21 -13 -90 -13 -62 0 -90 4 -90 12 0 17 31
48 48 48 10 0 12 5 7 18 -15 33 -17 70 -6 91 14 25 53 28 76 4z m125 -14 c7
-11 9 -26 6 -34 -7 -18 39 -58 69 -60 37 -1 53 -21 33 -42 -14 -14 -21 -14
-47 -3 -35 14 -96 77 -106 109 -6 21 9 51 26 51 5 0 13 -9 19 -21z"/>
        <path d="M135 340 c-4 -6 -4 -33 0 -60 6 -46 5 -49 -22 -64 -28 -15 -27 -15
37 -15 61 0 63 1 40 14 -22 12 -25 20 -25 71 0 54 -14 80 -30 54z"/>
      </g>
    </svg>

  );
  const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LogoSVG} />
  );
  /* #region  [- return -] */
  return (<LogoIcon />)
  /* #endregion */

}


export default React.memo(Logo);