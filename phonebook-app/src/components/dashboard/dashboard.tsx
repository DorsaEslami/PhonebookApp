/* #region  [- import -] */
import React, { FC, useState, Suspense } from "react";
import './dashboard.css';
import Menu from './menu/menu';
import DashboardLoading from './dashboardLoading';
import { SelectInfo } from '../../../node_modules/rc-menu/lib/interface';
const DefaultContent = React.lazy(() => import('./defaultContent/defaultContent'));
const Contacts = React.lazy(() => import('./contacts/contacts'));
/* #endregion */

const Dashboard: FC = (): JSX.Element => {

  /* #region  [- useState -] */
  const [content, setContent] = useState<React.ReactNode>(<DefaultContent />);
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
      <Suspense fallback={<DashboardLoading />}>
        <div className="dashboard-content">{content}</div>
      </Suspense>
    </div>
  );
  /* #endregion */

}

export default Dashboard;
