/* #region  [- import -] */
import './App.css';
import { FC } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoutes from './protectedRoutes';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';

/* #endregion */
const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoutes children={<Dashboard />} />} />
          <Route path="*" element={<p className='route-not-found body-strong'>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
