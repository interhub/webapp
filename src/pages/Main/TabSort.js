import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs( {setIdeas, ideas} ) {
  const [value, setValue] = React.useState(2);

  const handleChange = ( event, newValue ) => {
    setValue(newValue);

  };
  useEffect(() => {
    setIdeas(ideas.reverse())
  }, [value])

  return (
    // <Paper square>
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab disabled label="Сортировка:"/>
      <Tab label="По популярности"/>
      <Tab label="По новизне"/>
    </Tabs>
    // </Paper>
  );
}
