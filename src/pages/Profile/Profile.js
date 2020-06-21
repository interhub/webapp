import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import ProfileAll from './profile/ProfileAll'

const Profile = ( {screen} ) => {

  const getData = () => {
    fetch(location + '/user')
    .then(res => res.json())
    .then(res => {
      if (res.result === true) {

      } else {

      }
    })
  }

  return (

    <div style={{minHeight:'100vh'}}>
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

const ConnectProfile = connect(mstp, mdtp)(Profile)

export default ConnectProfile;
