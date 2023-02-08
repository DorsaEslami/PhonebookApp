/* #region  [- import -] */
import React, { Suspense } from 'react';
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
import Loading from '../shared/components/loading/loading';
const Dashboard = React.lazy(() => import('../dashboard/dashboard'));
const ChangePassword = React.lazy(() => import('../dashboard/changePassword/changePssword'));
/* #endregion */
const App: FC = (): JSX.Element => {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoutes children={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />} />
          <Route path="/changePassword" element={<ProtectedRoutes children={<Suspense fallback={<Loading />}><ChangePassword /></Suspense>} />} />
          <Route path="*" element={<p className='route-not-found'>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
