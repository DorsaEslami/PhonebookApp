/* #region  [- import -] */
import React, { FC, useEffect, useState } from "react";
import './dashboard';
import Menu from './menu/menu';
import Loading from './loading';
/* #endregion */

const Dashboard: FC = (): JSX.Element => {

  /* #region  [- useState -] */
  const [isLoadingPageHidden, setIsLoadingPageHidden] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  /* #endregion */

  /* #region  [- setIsLoadingPageHidden -] */
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoadingPageHidden(true);
  //   }, 3000);
  // }, [])
  /* #endregion */

  /* #region  [- return -] */
  return (
    <div className="dashboard">
      <Menu />
      {/* <Loading isLoadingPageHidden={isLoadingPageHidden} /> */}
      {/* <div hidden={!isLoadingPageHidden} className="dashboard-content">{content}</div> */}
    </div>
  );
  /* #endregion */

}

export default Dashboard;
