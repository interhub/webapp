import { connect } from "react-redux";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PROFILE, MAIN_PAGE, ADD_IDEA, GROUPS } from '../store/screenNames'
import { setScreen } from "../store/actions";
import Button from "@material-ui/core/Button";
import ExiteIcon from '@material-ui/icons/Menu'


function TabPanel( props ) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps( index ) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab( props ) {
  return (
    <Tab
      component="a"
      onClick={( event ) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(( theme ) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MyTabs( {setScreen, screen} ) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const openMain = () => {
    setScreen(MAIN_PAGE);
  }

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
    <div>
      {(screen === MAIN_PAGE || screen === PROFILE || screen === GROUPS) &&
      <Tabs
        value={getValueNyScreen(screen)} onChange={handleChange}
        variant="fullWidth"
        aria-label="nav tabs example"
      >
        <LinkTab style={{fontSize: 14}} label="Главная" {...a11yProps(0)} />
        <LinkTab style={{fontSize: 14}} label="Профиль" {...a11yProps(1)} />
        <LinkTab style={{fontSize: 14}} label="Последние новости" {...a11yProps(2)} />
      </Tabs>
      }
      {!(screen === MAIN_PAGE || screen === PROFILE || screen === GROUPS) &&
      <Button size="small" onClick={() => setScreen(MAIN_PAGE)}
              style={{color: 'white', height: 45, marginLeft: 5, fontSize: 10}}
              startIcon={<ExiteIcon/>} variant="outlined">На
        главную</Button>}
    </div>

  )
    ;
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
