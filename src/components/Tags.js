import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../varibles/location'
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { setScreen } from "../store/actions";
import { GROUP } from '../store/screenNames'


const Tags = ( {screen, tags, setScreen} ) => {


  const getData = ( tag ) => {

    setScreen(GROUP)

    // fetch(location + '/user')
    // .then(res => res.json())
    // .then(res => {
    //   if (res.result === true) {
    //
    //   } else {
    //
    //   }
    // })
  }

  return (
    <List className={'tags scrollbar'} id={'style-6'} style={{maxHeight: '100%', overflowX: 'scroll', display: 'flex'}}>
      {tags.map(( tag, i ) => {
        return <ListItem
          onClick={() => getData(tag)}
          style={{backgroundColor: '#EEF1F3', marginRight: 20, whiteSpace: 'nowrap', cursor: 'pointer'}}
          primaryText={tag}
          secondaryText="bar1">{tag}</ListItem>
      })}
    </List>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen,
    tags: state.tags
  }
}
const mdtp = {
  setScreen
}

const ConnectTags = connect(mstp, mdtp)(Tags)


export default ConnectTags;
