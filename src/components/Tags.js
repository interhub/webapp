import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'

const Tags = ( {screen} ) => {

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
    <div style={{backgroundColor: 'red'}}>
      Теги
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

const ConnectTags = connect(mstp, mdtp)(Tags)


export default ConnectTags;
