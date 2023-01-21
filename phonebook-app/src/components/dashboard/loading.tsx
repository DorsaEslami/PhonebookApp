/* #region  [- import -] */
import '../dashboard/dashboard.css';
import { Spin } from 'antd';
import { FC } from 'react';
/* #endregion */
interface Props {
  isLoadingPageHidden: boolean
}
const Loading: FC<Props> = ({ isLoadingPageHidden }): JSX.Element => {


  /* #region  [- return -] */
  return (
    <div className="loading" hidden={isLoadingPageHidden}>
      <div className='loading-loading-div'><Spin /></div>
      <img className='loading-img' src='../img/loading.png' alt="loading" />
      <div className='loading-text'>Loading....</div>
    </div>
  );
  /* #endregion */

}

export default Loading;
