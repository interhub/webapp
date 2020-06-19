import React from 'react';
import store from './store/store'
import { Provider, connect } from 'react-redux'
import Nav from "./components/Nav";
import './App.css';
import { MAIN_PAGE } from './store/screenNames'
import ProfileAll from "./store/profile/ProfileAll";

const App = ( {screen} ) => {
  return (

    <div className="App">
      <Nav/>
      <ProfileAll />
    </div>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen
  }
}
const mdtp = ( dispatch ) => {
  return {}
}

const ConnectApp = connect(mstp, mdtp)(App)

const ProviderApp = () => {
  return <Provider store={store}>
    <ConnectApp/>
  </Provider>
}

export default ProviderApp;
