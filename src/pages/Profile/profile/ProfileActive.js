import React from "react";
import ProfileActiveHeader from "./ProfileActiveHeader";
import Typography from "@material-ui/core/Typography";
import Tags from "../../../components/Tags";
import Idea from "../../../components/Idea";
import ProfileTabs from "./ProfileTabs";
import Drawer from "@material-ui/core/Drawer";

function ProfileActive() {
  return (<div>
    <Typography variant="h4" style={{textAlign: 'left', margin: 10}}>Моя активность</Typography>
    <ProfileTabs/>
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {/*{ideas.map(( idea, i ) => {*/}
        {/*  return <Idea {...idea} num={i} key={i} like={like}/>*/}
        {/*})}*/}
        массив активности (личные идеи и достижения)
      </div>
    </div>
  </div>)
}

export default ProfileActive;
