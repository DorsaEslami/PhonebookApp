/* #region  [- import -] */
import React, { FC, useEffect, useState } from "react";
import './dashboard.css';
import Menu from './menu/menu';
import Loading from './loading';
import { SelectInfo } from '../../../node_modules/rc-menu/lib/interface';
import DefaultContent from './defaultContent';
import Contacts from './contacts/contacts';
/* #endregion */

const Dashboard: FC = (): JSX.Element => {

  /* #region  [- useState -] */
  const [isLoadingPageHidden, setIsLoadingPageHidden] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(<DefaultContent />);
  /* #endregion */

  /* #region  [- setIsLoadingPageHidden -] */
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPageHidden(true);
    }, 3000);
  }, [])
  /* #endregion */

  /* #region  [- onClickMenueItem -] */
  const onClickMenueItem = (info: SelectInfo) => {
    if (info.key === 'home') {
      setContent(<DefaultContent />);
    }
    else if (info.key === 'contacts') {
      setContent(<Contacts />);
    }
    else {
      setContent(<DefaultContent />);
    }
  }
  /* #endregion */

  /* #region  [- return -] */
  return (
    <div className="dashboard">
      <Menu onClickMenueItem={onClickMenueItem} />
      <Loading isLoadingPageHidden={isLoadingPageHidden} />
      <div hidden={!isLoadingPageHidden} className="dashboard-content">{content}</div>
    </div>
  );
  /* #endregion */

}

export default Dashboard;
