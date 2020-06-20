import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import location from '../../varibles/location'
import Tags from "../../components/Tags";
import Typography from "@material-ui/core/Typography";
import TabSort from "./TabSort";
import Idea from "../../components/Idea";
import { setGroup, setScreen } from "../../store/actions";
import { GROUP } from '../../store/screenNames'

// import ProfileLinks from "../../../components/ProfileLinks";

const Main = ( {screen, setScreen, setGroup} ) => {

  let [ideas, setIdeas] = useState(new Array(25).fill(1).map(() => ({
    id: '',
    groupId: '',
    author: {},
    tags: ['Отдых', 'Здоровье', 'Веселье', 'Танцы'],
    name: 'Моя новая идея',
    text: ' Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\n' +
      '            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\n' +
      '            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken\n' +
      '            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and\n' +
      '            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add\n' +
      '            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
    rating: 1234,
    date: '20 июня 2020 года'
  })))

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
      <TabSort/>
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
  setGroup
}

const ConnectMain = connect(mstp, mdtp)(Main)

export default ConnectMain;
