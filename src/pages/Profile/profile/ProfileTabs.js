import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { setScreen, setTab } from "../../../store/actions";
import { connect } from "react-redux";

function DisabledTabs( {tab, setTab} ) {
  // const [value, setValue] = React.useState(4);

  const handleChange = ( event, newValue ) => {
    setTab(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Мои идеи"/>
        <Tab label="Последние активности"/>
        <Tab label="Сохраненные идеи"/>
        <Tab label="Отслеживаю"/>
        <Tab label="Достижения"/>
      </Tabs>
    </Paper>
  );
}


const mstp = ( state ) => {
  return {
    screen: state.screen,
    group: state.group,
    tab: state.tab
  }
}
const mdtp = {
  setScreen,
  setTab
}

const ConnectDisabledTabs = connect(mstp, mdtp)(DisabledTabs)


export default ConnectDisabledTabs;

