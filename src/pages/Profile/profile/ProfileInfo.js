import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { setScreen, setUser } from "../../../store/actions";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from '@material-ui/icons/Drafts';

/*Страница профиля, правая часть, рыбка*/

const ProfileInfo = ( {email, phone, department, city, user} ) => {

  return (
    <div className={'ProfileInfo'}>
      <Typography style={{textAlign: 'left'}} variant={'h5'}>
        Персональная информация
      </Typography>

      {/*<div>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'body1'}>*/}
      {/*    Имя*/}
      {/*  </Typography>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'h6'}>*/}
      {/*    {user.fullname} Иванов Иван Иванович*/}
      {/*  </Typography>*/}
      {/*</div>*/}
      {/*<Divider />*/}
      {/*<div>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'body1'}>*/}
      {/*    Телефон*/}
      {/*  </Typography>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'h6'}>*/}
      {/*    {user.phone}*/}
      {/*  </Typography>*/}
      {/*</div>*/}
      {/*<Divider />*/}
      {/*<div>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'body1'}>*/}
      {/*    Должность*/}
      {/*  </Typography>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'h6'}>*/}
      {/*    {user.job}*/}
      {/*  </Typography>*/}
      {/*</div>*/}
      {/*<Divider />*/}
      {/*<div>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'body1'}>*/}
      {/*    Город*/}
      {/*  </Typography>*/}
      {/*  <Typography style={{textAlign: 'left'}} variant={'h6'}>*/}
      {/*    {user.city}*/}
      {/*  </Typography>*/}
      {/*</div>*/}
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Avatar src={user.image ? user.image : undefined}>
              <AccountCircle/>
            </Avatar>
            {/*<InboxIcon/>*/}
          </ListItemIcon>
          <ListItemText primary={user.first_name + ' ' + user.second_name + ' ' + user.last_name}/>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon/>
          </ListItemIcon>
          <ListItemText primary={user.department}/>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary={user.email}/>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon/>
          </ListItemIcon>
          <ListItemText primary={user.city}/>
        </ListItem>
        <Divider/>
      </List>


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
  setScreen,
  setUser
}

const ConnectProfileInfo = connect(mstp, mdtp)(ProfileInfo)

export default ConnectProfileInfo


