import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setGroup, setScreen, setUser } from "../../store/actions";
import ListGroups from "./ListGroups";
import Chips from "./Chips";
import { GROUP } from '../../store/screenNames'
import Alert from './Alert'


const AddIdea = ( {screen, user, group, setScreen, setGroup} ) => {

  let [list, setList] = useState([])
  let [active, setActive] = useState(0)
  let [tags, setTags] = useState([])
  let [idea, setIdea] = useState({name: '', text: ''})
  let [alert, setAlert] = useState(false);

  // useEffect(() => {
  //   console.log(list, 'list')
  //
  // }, [list])


  const getData = ( text ) => {
    // let words = text.split(' ');
    // if (words.length > 1) {
    gets()

    // }

    function gets() {
      fetch(location + '/idea/get_relevant_ideas', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'res input idea')
        if (res.result) {
          console.log('group sets')
          setList(res.groups)
          setActive(0)
          setGroup(res.groups[0])
          setTags(res.tags)
        } else {

        }
      })
      .catch(( e ) => {
        console.log(e, 'err input idea')
      })
    }

  }


  //отправка готового идеи
  const sendData = () => {

    let isNew = active < 0;
    console.log({
      group_id: isNew ? '' : group.id,
      name: idea.name,
      text: idea.text,
      author_id: user.user_id,
      tags
    }, 'THIS ')
    fetch(location + (isNew ? '/idea/add_new_group' : '/idea/add_idea_to_group'), {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        group_id: isNew ? '' : group.id,
        name: idea.name,
        text: idea.text,
        author_id: user.user_id,
        tags
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res new idea add')
      if (res.result) {
        if (res.group) {
          setGroup(res.group)
        }
        setAlert(true)
        setTimeout(() => {
            setScreen(GROUP)
            setAlert(false)
          }
          , 2000)
      } else {

      }
    })
    .catch(( e ) => {
      console.log(e, 'err new idea add')
    })

  }

  return (

    <div>
      <Alert open={alert}/>
      <div style={{padding: 20}}>
        <TextField onInput={( e ) => setIdea({
          ...idea, name: e.target.value
        })} id="outlined-basic" label="Название идеи" variant="outlined" fullWidth
                   style={{marginBottom: 20}}/>
        <TextField
          onInput={( e ) => {
            getData(e.target.value)
            setIdea({
              ...idea, text: e.target.value
            })
          }}
          fullWidth
          id="outlined-multiline-static"
          label="Введите свою идею"
          multiline
          rows={4}
          defaultValue=""
          placeholder={'Сделать мир лучше'}
          variant="outlined"
        />
      </div>
      {/*массив тегов новых   */}
      <Chips tags={tags} setTags={setTags}/>
      <div style={{padding: 20}}>
        <ListGroups list={list} active={active} setActive={setActive}/>
        <Button onClick={sendData} variant="contained" style={{margin: 20}} color="primary">
          Добавить
        </Button>
      </div>
    </div>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen,
    user: state.user,
    group: state.group
  }
}
const mdtp = {
  setUser,
  setScreen,
  setGroup
}

const ConnectAddIdea = connect(mstp, mdtp)(AddIdea)


export default ConnectAddIdea;
