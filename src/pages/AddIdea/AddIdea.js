import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setUser } from "../../store/actions";

const AddIdea = ( {screen} ) => {


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
        if (res.result === true) {

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
      <div style={{padding: 20}}>
        <Button variant="contained" color="primary">
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
