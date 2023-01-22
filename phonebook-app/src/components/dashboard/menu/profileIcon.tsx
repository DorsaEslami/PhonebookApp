/* #region  [- import -] */
import { FC, } from "react";
import React from "react";
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

/* #endregion */

const ProfileIcon: FC = (): JSX.Element => {
  const ProfileIconSVG = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM10.5 8.75C10.5 6.817 12.067 5.25 14 5.25C15.933 5.25 17.5 6.817 17.5 8.75C17.5 10.683 15.933 12.25 14 12.25C12.067 12.25 10.5 10.683 10.5 8.75ZM9.62497 14L18.375 14C19.8247 14 21 15.1753 21 16.625C21 18.5781 20.1968 20.143 18.8787 21.2009C17.5815 22.2421 15.8429 22.75 14 22.75C12.1571 22.75 10.4185 22.2421 9.12126 21.2009C7.8032 20.143 7 18.5781 7 16.625C7 15.1753 8.17523 14 9.62497 14Z" fill="white" />
    </svg>
  );
  const ProfileAntDIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ProfileIconSVG} />
  );
  /* #region  [- return -] */
  return (<ProfileAntDIcon />)
  /* #endregion */

}


export default React.memo(ProfileIcon);