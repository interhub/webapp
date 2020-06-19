import React, { useEffect } from 'react';
import store from './store/store'
import { Provider, connect } from 'react-redux'
import Nav from "./components/Nav";
import './App.css';
import location from './varibles/location'
import { MAIN_PAGE, PROFILE, ADD_IDEA, GROUP } from './store/screenNames'
import AddBtn from "./components/AddBtn";
import AddIdea from "./pages/AddIdea/AddIdea";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Group from "./pages/Group/Group";


const App = ( {screen} ) => {

  const getData = () => {
    fetch(location + '/user')
    .then(res => res.json())
    .then(res => {
      if (res.result === true) {

      } else {

      }
    })
  }

  useEffect(() => {
    getData()
  }, [])
  return (

    <div className="App">
      <Nav/>
      <AddBtn/>
      {screen === MAIN_PAGE && <Main/>}
      {screen === PROFILE && <Profile/>}
      {screen === ADD_IDEA && <AddIdea/>}
      {screen === GROUP && <Group/>}
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
