import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( event, newValue ) => {
    setValue(newValue);
  };

  return (
    // <Paper square>
    <Tabs
      value={value}
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
    // </Paper>
  );
}
