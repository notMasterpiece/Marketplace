import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Api from '../../api/api';
import { routes } from '../../routes';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
      <Route {...rest} render={(props) => (
        Api.isLoggedIn()
          ? <Component {...props} />
          : <Redirect to={{
            pathname: routes.login,
            state: { from: props.location },
          }}/>
      )}/>
    );
  }
;

export default PrivateRoute;