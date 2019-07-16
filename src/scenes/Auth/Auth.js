import React from 'react';
import { routes } from '../../routes';
import Login from './Login/LoginContainer';
import Register from './Register/RegisterContainer';
import ResetPassword from './ResetPassword/ResetPasswordContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Api from '../../api/api';

import Header from '../../components/Header/HeaderContainer';

const Auth = () => {

  return (
    <AuthBlock>
      <Header isLight isSearch={false}/>
      <Switch>
        {Api.isLoggedIn() && <Redirect to={routes.home}/>}
        <Route path={routes.login} component={Login}/>
        <Route path={routes.register} component={Register}/>
        <Route path={routes.reset} component={ResetPassword}/>
        <Redirect from={routes.auth} to={routes.login}/>
      </Switch>
    </AuthBlock>
  );
};

const AuthBlock = styled.div``;

export default Auth;