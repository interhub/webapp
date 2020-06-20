import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import location from '../../varibles/location'
import Tags from "../../components/Tags";
import Typography from "@material-ui/core/Typography";
import TabSort from "./TabSort";
import Idea from "../../components/Idea";

const AddIdea = ( {screen} ) => {

  let [ideas, setIdeas] = useState(new Array(25).fill(1).map(() => ({
    id: '',
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
    fetch(location + '/ideas')
    .then(res => res.json())
    .then(res => {
      if (res.result === true) {

      } else {

      }
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
      <Typography variant="h4" style={{textAlign: 'left'}}>Идеи</Typography>
      <Tags/>
      <TabSort/>
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {ideas.map(( idea, i ) => {
            return <Idea {...idea} num={i} key={i} like={like}/>
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
