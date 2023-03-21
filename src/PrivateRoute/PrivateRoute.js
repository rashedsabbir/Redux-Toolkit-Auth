import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Outlet
    {...rest}
    render={(props) =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);