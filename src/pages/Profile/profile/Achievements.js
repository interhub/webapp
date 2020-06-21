import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { setScreen, setTab } from "../../../store/actions";
import { connect } from "react-redux";

const useStyles = makeStyles(( theme ) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function FolderList( {user} ) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {user.achievements && user.achievements.map(( el, i ) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar src={el.image ? el.image : ''}>
                <ImageIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={el.name} secondary={el.description}/>
          </ListItem>)
      })}

    </List>
  );
}


const mstp = ( state ) => {
  return {
    screen: state.screen,
    group: state.group,
    tab: state.tab,
    user: state.user
  }
}
const mdtp = {
  setScreen,
  setTab
}

const ConnectFolderList = connect(mstp, mdtp)(FolderList)


export default ConnectFolderList;

