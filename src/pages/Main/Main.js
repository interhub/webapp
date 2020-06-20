import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import Tags from "../../components/Tags";
import Typography from "@material-ui/core/Typography";
import TabSort from "./TabSort";
import Idea from "../../components/Idea";

const AddIdea = ( {screen} ) => {

  let [ideas, setIdeas] = useState(new Array(30).fill(1))

  const getData = () => {
    fetch(location + '/ideas')
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
      <TabSort/>
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {ideas.map(( el, i ) => {

            return <Idea/>
          })}
        </div>
      </div>
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
