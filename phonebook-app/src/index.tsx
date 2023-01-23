/* #region  [- import -] */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import store from './store/config/configureStore';
/* #endregion */

/* #region  [- defaultData -] */
type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  colorTextBase: string;
  fontFamily: string;
  colorSuccess: string
};
const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#127591',
  colorTextBase: '#0F1E27',
  fontFamily: 'Montserrat',
  colorSuccess: '#127591'
};

/* #endregion */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ConfigProvider theme={{
    token: {
      borderRadius: defaultData.borderRadius,
      colorPrimary: defaultData.colorPrimary,
      colorTextBase: defaultData.colorTextBase,
      fontFamily: defaultData.fontFamily,
      colorSuccess: defaultData.colorSuccess
    }
  }}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
reportWebVitals();