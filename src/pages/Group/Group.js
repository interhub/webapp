import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'

const Group = ( {screen} ) => {

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

    <div>
      Одна Группа идей
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
