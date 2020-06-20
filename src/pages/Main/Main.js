import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import Tags from "../../components/Tags";
import Typography from "@material-ui/core/Typography";
import TabSort from "./TabSort";

const AddIdea = ( {screen} ) => {

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
      <Typography variant="h4" style={{textAlign: 'left'}}>Идеи</Typography>
      <Tags/>
      <TabSort />
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

const ConnectAddIdea = connect(mstp, mdtp)(AddIdea)


export default ConnectAddIdea;
