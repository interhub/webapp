import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import location from '../../varibles/location'
import Tags from "../../components/Tags";
import Typography from "@material-ui/core/Typography";
import TabSort from "./TabSort";
import Idea from "../../components/Idea";
import { setGroup, setScreen, setTags } from "../../store/actions";
import { GROUP } from '../../store/screenNames'

// import ProfileLinks from "../../../components/ProfileLinks";

const Main = ( {screen, setScreen, setGroup, setTags} ) => {

  let [ideas, setIdeas] = useState([])
  // GET_ALL_IDEAS
  const getData = () => {
    fetch(location + '/idea/get_top_ideas')
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res ideas top (Main)')
      if (res.result === true) {
        setIdeas(res.data)
      } else {

      }
    })
    .catch(e => {
      console.log(e, 'err get ideas')
    })

    // GET TAGS
    fetch(location + '/tag/get_tags_rating')
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res tags all (Main)')
      if (res.result === true) {
        setTags(res.tags.map(el => el.name))
      } else {
      }
    })
    .catch(e => {
      console.log(e, 'err get ideas')
    })

  }

  const getGroupByTag = ( tag ) => {

    fetch(location + '/idea/get_group_by_tag', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tag})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res tag')
      if (res.result === true) {
        setScreen(GROUP)
        setGroup(res.data)
      } else {

      }
    })
    .catch(( e ) => {
      console.log(e, 'err send tag')
    })
  }

  const like = ( id ) => {
    console.log(id, 'ids')
    let items = [...ideas];
    if (items[id].isLike) {
      items[id].isLike = false
    } else {
      items[id].isLike = true
    }
    setIdeas([...items])
  }

  useEffect(() => {
    getData()
  }, [])
  return (

    <div>
      <Typography variant="h4" style={{textAlign: 'left', padding: 10}}>Идеи</Typography>
      <Tags getGroupByTag={getGroupByTag}/>
      <TabSort setIdeas={setIdeas} ideas={ideas}/>
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {ideas.map(( idea, i ) => {
            return <Idea getGroupByTag={getGroupByTag} {...idea} num={i} key={i} like={like}/>
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
const mdtp = {
  setScreen,
  setGroup,
  setTags
}

const ConnectMain = connect(mstp, mdtp)(Main)

export default ConnectMain;
