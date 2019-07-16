import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import { Provider, connect } from 'react-redux';
import { store, persistor } from './store/store';
import HomeView from './scenes/Home/HomeView';
import Privacy from './scenes/Privacy/Privacy';
import Policy from './scenes/Policy/Policy';
import AddProduct from './scenes/Addproduct/AddproductContainer';
import AddProductModal from './components/Modals/AddProductModal/AddproductContainer';
import Chat from './scenes/Chat/ChatContainer';
import Auth from './scenes/Auth/Auth';
import Saved from './scenes/Saved/SavedContainer';
import { routes } from './routes';
import GlobalStyle from './GlobalStyle';
import PrivateRoute from './components/Route/PrivateRoute';
import { appOperations } from './modules/app';
import Footer from './components/Footer/Footer';
import { PersistGate } from 'redux-persist/integration/react';

const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;


class AppInner extends Component {
  constructor(props) {
    super(props);
    props.dispatch(appOperations.init());
  }

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }


  render() {
    const { app } = this.props;
    let { location } = this.props;
    if (app.isLoading) {
      return null;
    }

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render


    return (
      <HomeContainer>
        <main>
          <Switch location={isModal ? this.previousLocation : location}>
            <PrivateRoute path={routes.chat} component={Chat} />
            <Route path={routes.productAdd} component={AddProduct} />
            <Route path={routes.privacy} component={Privacy} />
            <Route path={routes.policy} component={Policy} />
            <Route path={routes.auth} component={Auth} />
            <Route path={routes.saved} component={Saved} />
            <Route path={routes.home} component={HomeView} />
          </Switch>
          {isModal
            ?
            <Route
              path={routes.productAdd}
              component={AddProductModal}
            />
            : null}
        </main>
        <Footer />
        <GlobalStyle />
      </HomeContainer>
    );
  }
}

const AppConnected = connect((state) => ({
  app: state.app,
  viewer: state.viewer,
}))(AppInner);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <Router>
          <Route component={AppConnected} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
