import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from "react-redux";
import { setScreen } from "../store/actions";

const useStyles = makeStyles(( theme ) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  {icon: <SpeedDialIcon/>, name: 'Новая идея'},
  {icon: <FavoriteIcon/>, name: 'Группа идей'},
];

function AddBtn( {setScreen} ) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 1) {
        setHidden(( prevHidden ) => false);
      } else {
        setHidden(( prevHidden ) => true);
      }
    }
  }, [])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{position: 'fixed', height: '91vh ', width: '100vw'}} className={classes.root}>
      <Backdrop open={open}/>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(( action ) => (
          <SpeedDialAction
            style={{marginBottom: 20}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
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
  setScreen
}

const ConnectAddBtn = connect(mstp, mdtp)(AddBtn)

export default ConnectAddBtn
