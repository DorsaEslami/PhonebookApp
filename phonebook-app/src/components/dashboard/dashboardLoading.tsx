/* #region  [- import -] */
import '../dashboard/dashboard.css';
import { Spin } from 'antd';
/* #endregion */

const DashboardLoading = (): JSX.Element => {


  /* #region  [- return -] */
  return (
    <div className="dashboard-loading" >
      <div className='loading-div'><Spin /></div>
      <img className='loading-img' src='../img/loading.png' alt="loading" />
      <div className='loading-text'>Loading....</div>
    </div>
  );
  /* #endregion */

}

export default DashboardLoading;
