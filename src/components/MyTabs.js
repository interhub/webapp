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
    <Tabs
      value={getValueNyScreen(screen)} onChange={handleChange}
      variant="fullWidth"
      aria-label="nav tabs example"
    >
      <LinkTab label="Главная" {...a11yProps(0)} />
      <LinkTab label="Профиль" {...a11yProps(1)} />
      <LinkTab label="Последние новости" {...a11yProps(2)} />
    </Tabs>

  );
}

//
// const StyledTabs = withStyles({
//   indicator: {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     '& > span': {
//       maxWidth: 40,
//       width: '100%',
//       backgroundColor: '#635ee7',
//     },
//   },
// })(( props ) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);
//
// const StyledTab = withStyles(( theme ) => ({
//   root: {
//     textTransform: 'none',
//     color: '#fff',
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     '&:focus': {
//       opacity: 1,
//     },
//   },
// }))(( props ) => <Tab disableRipple {...props} />);
//
// function MyTabs( {screen, setScreen} ) {
//   const [value, setValue] = React.useState(0);
//
//   const handleChange = ( event, newValue ) => {
//     switch (newValue) {
//       case 0:
//         setScreen(MAIN_PAGE);
//         break
//       case 1:
//         setScreen(PROFILE);
//         break
//       case 2:
//         setScreen(GROUPS);
//         break
//       default :
//         setScreen(MAIN_PAGE);
//     }
//   };
//
//   const getValueNyScreen = ( scr ) => {
//     switch (scr) {
//       case MAIN_PAGE:
//         return 0
//       case PROFILE:
//         return 1;
//       case GROUPS:
//         return 2
//       default :
//         return 0
//     }
//   }
//
//   return (
//     <StyledTabs style={{maxWidth: 300}} value={getValueNyScreen(screen)} onChange={handleChange}>
//       <StyledTa//   );
// }


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
