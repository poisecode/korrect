import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from "./ManageToken";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      //ON EVERY ROUTE GET PARAMS FROM URL AND SET TO LOCAL STORAGE.
      const scope = {};
      //localStorage.setItem('scope', JSON.stringify(scope));
      return requireAuth() ?
        (
          // key ADDED TO MAKE EVERY ROUTE WITH DIFFERENT PARAMS ID UNIQUE AND CALL DID MOUNT
          // WHEN PARAM ID CHANGES.
          <Component key={props.location.pathname} {...props} />
        )
        :
        (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
    }
  />
);

const requireAuth = () => {
  const token = getToken();
  return token;
}

export default PrivateRoute;