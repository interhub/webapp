import { connect } from "react-redux";
import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MAIN_PAGE, GROUPS, PROFILE, ADD_IDEA } from '../store/screenNames'
import { setScreen } from "../store/actions";

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(( props ) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

const StyledTab = withStyles(( theme ) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(( props ) => <Tab disableRipple {...props} />);

function MyTabs( {screen, setScreen} ) {
  const [value, setValue] = React.useState(0);

  const handleChange = ( event, newValue ) => {
    switch (newValue) {
      case 0:
        setScreen(MAIN_PAGE);
        break
      case 1:
        setScreen(PROFILE);
        break
      case 2:
        setScreen(GROUPS);
        break
      default :
        setScreen(MAIN_PAGE);
    }
  };

  const getValueNyScreen = ( scr ) => {
    switch (scr) {
      case MAIN_PAGE:
        return 0
      case PROFILE:
        return 1;
      case GROUPS:
        return 2
      default :
        return 0
    }
  }

  return (
    <StyledTabs  value={getValueNyScreen(screen)} onChange={handleChange} aria-label="styled tabs example">
      <StyledTab label="Главная"/>
      <StyledTab label="Профиль"/>
      <StyledTab label="Последние новости"/>
    </StyledTabs>
  );
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

const ConnectMyTabs = connect(mstp, mdtp)(MyTabs)

export default ConnectMyTabs
