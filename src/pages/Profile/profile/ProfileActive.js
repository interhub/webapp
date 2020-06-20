import React from "react";
import ProfileActiveHeader from "./ProfileActiveHeader";
import Typography from "@material-ui/core/Typography";
import Tags from "../../../components/Tags";
import Idea from "../../../components/Idea";
import ProfileTabs from "./ProfileTabs";
import Drawer from "@material-ui/core/Drawer";
import { setScreen } from "../../../store/actions";
import { connect } from "react-redux";

function ProfileActive( {user} ) {
  return (<div>
    <Typography variant="h4" style={{textAlign: 'left', margin: 10}}>Моя активность</Typography>
    <ProfileTabs/>
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {/*{ideas.map(( idea, i ) => {*/}
        {/*  return <Idea {...idea} num={i} key={i} like={like}/>*/}
        {/*})}*/}
        {user.ideas && user.ideas.length == 0 && <Typography style={{marginTop: 30}} variant={'h4'}>
          Впервые у нас? Создайте свое предложение!
        </Typography>}
      </div>
    </div>
  </div>)
}


const mstp = ( state ) => {
  return {
    screen: state.screen,
    user: state.user
  }
}
const mdtp = {
  setScreen
}

const ConnectProfileActive = connect(mstp, mdtp)(ProfileActive)

export default ConnectProfileActive