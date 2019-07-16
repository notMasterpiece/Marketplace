import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Latest } from '../../components';
import Header from '../../components/Header/HeaderContainer';
import SingleProductContainer from '../SingleProduct/SingleProductContainer';
import UserContainer from '../User/UserContainer';
import { routes } from '../../routes';
import NotFound from '../NotFound/NotFound';
import Viewer from '../Viewer/ViewerContainer';
import PrivateRoute from '../../components/Route/PrivateRoute';

function HomeView() {
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route exact path={routes.home} component={Latest} />
        <Route path={routes.product} component={SingleProductContainer} />
        <Route path={routes.user} component={UserContainer} />
        <PrivateRoute path={routes.me} component={Viewer} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default HomeView;
