import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import location from '../../varibles/location'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setUser } from "../../store/actions";

const AddIdea = ( {screen} ) => {

  const getData = (txt => {
    console.log(txt)
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

    <div>
      <div style={{padding: 20}}>
        <TextField
          onInput={( txt ) => getData(txt)}
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
