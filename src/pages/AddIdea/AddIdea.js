import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setGroup, setUser } from "../../store/actions";
import ListGroups from "./ListGroups";
import Chips from "./Chips";

const AddIdea = ( {screen} ) => {

  let [list, setList] = useState([])
  let [active, setActive] = useState(0)
  let [tags, setTags] = useState([])

  // useEffect(() => {
  //   console.log(list, 'list')
  //
  // }, [list])


  const getData = ( text ) => {
    let words = text.split(' ');
    if (words.length > 1) {
      send()
    }

    function send() {
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

  return (

    <div>
      <div style={{padding: 20}}>
        <TextField
          onInput={( e ) => getData(e.target.value)}
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
        <Button variant="contained" style={{margin: 20}} color="primary">
          Добавить
        </Button>
      </div>
    </div>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen,
    user: state.user
  }
}
const mdtp = {
  setUser
}

const ConnectAddIdea = connect(mstp, mdtp)(AddIdea)


export default ConnectAddIdea;
