import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import LNAll from "./LNAll";

const Group = ( {screen} ) => {

  return (

      <div style={{minHeight:'100vh'}}>
        <LNAll />
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

const ConnectGroup = connect(mstp, mdtp)(Group)


export default ConnectGroup;
