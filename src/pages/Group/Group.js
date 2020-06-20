import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import Typography from "@material-ui/core/Typography";
import { setGroup, setScreen } from "../../store/actions";
import TabComments from "./TabComments";
import Idea from "../../components/Idea";
import Comments from "./Comments";

const Group = ( {screen, group} ) => {

  let [comments, setComments] = useState(false)

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
        setGroup(res.group)
      } else {

      }
    })
    .catch(( e ) => {
      console.log(e, 'err send tag')
    })
  }


  const like = ( id ) => {
    console.log(id, 'ids')
    let items = [...group.ideas];
    if (items[id].isLike) {
      items[id].isLike = false
    } else {
      items[id].isLike = true
    }
    setGroup({
      ...group, ideas: [...items
      ]
    })
  }

  return (

    <div>
      <Typography variant="h2" style={{textAlign: 'left', padding: 10}}>#{group.name}</Typography>
      <TabComments setComments={setComments}/>
      {!comments && <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {group.ideas && group.ideas.map(( idea, i ) => {
          return <Idea getGroupByTag={getGroupByTag} {...idea} num={i} key={i} like={like}/>
        })}
      </div>}
      {comments && <Comments/>}
    </div>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen,
    group: state.group
  }
}
const mdtp = {
  setScreen
}

const ConnectGroup = connect(mstp, mdtp)(Group)


export default ConnectGroup;
