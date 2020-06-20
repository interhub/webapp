import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function TabComments( {setComments} ) {
  const [value, setValue] = React.useState(1);

  const handleChange = ( event, newValue ) => {
    setValue(newValue);
    setComments(newValue === 2 ? true : false)
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab disabled label="Раздел:"/>
      <Tab label="Идеи"/>
      <Tab label="Комментарии"/>
    </Tabs>
  );
}
