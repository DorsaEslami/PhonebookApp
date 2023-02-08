/* #region  [- import -] */
import './loading.css';
import { Spin } from 'antd';
/* #endregion */

const Loading = (): JSX.Element => {


  /* #region  [- return -] */
  return (
    <div className="loading">
      <div className='loading-div'><Spin /></div>
      <img className='loading-img' src='../img/loading.png' alt="loading" />
      <div className='loading-text'>Loading....</div>
    </div>
  );
  /* #endregion */

}

export default Loading;
