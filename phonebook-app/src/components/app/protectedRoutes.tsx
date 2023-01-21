import React, { FC } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element
}
const ProtectedRoutes: FC<Props> = ({ children }): JSX.Element | null => {
  if (localStorage.getItem('token') === null) {
    return <Navigate to='/login' />;
  }
  else {
    return (children)
  }
};

export default ProtectedRoutes;