import React, { useEffect } from 'react';
import store from './store/store'
import { Provider, connect } from 'react-redux'
import Nav from "./components/Nav";
import './App.css';
import location from './varibles/location'
import { MAIN_PAGE, PROFILE, ADD_IDEA, GROUP, GROUPS } from './store/screenNames'
import AddBtn from "./components/AddBtn";
import AddIdea from "./pages/AddIdea/AddIdea";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Group from "./pages/Group/Group";
import Groups from "./pages/Groups/Groups";
import Backdrop from "@material-ui/core/Backdrop";
import $ from 'jquery';
import { setUser } from "./store/actions";

const App = ( {screen, back, setUser} ) => {

  const getData = () => {
    fetch(location + '/user/get_user')
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res user')
      if (res.result === true) {
        setUser(res.data)
      } else {

      }
    })
  }

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    $("html, body").animate({scrollTop: 0}, 500, 'swing')
  }, [screen])
  return (

    <div className="App">
      <Nav/>
      <Backdrop open={back}/>
      <AddBtn/>
      {screen === MAIN_PAGE && <Main/>}
      {screen === PROFILE && <Profile/>}
      {screen === ADD_IDEA && <AddIdea/>}
      {screen === GROUP && <Group/>}
      {screen === GROUPS && <Groups/>}
    </div>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen,
    back: state.back
  }
}
const mdtp = {
  setUser
}

const ConnectApp = connect(mstp, mdtp)(App)

const ProviderApp = () => {
  return <Provider store={store}>
    <ConnectApp/>
  </Provider>
}

export default ProviderApp;
