import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from "react-redux";
import { setScreen } from "../store/actions";
import { GROUP } from '../store/screenNames'
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles(( theme ) => ({
  root: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '10%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

function Idea( {id, author, tags, name, text, rating, date, isLike = false, num, like, setScreen} ) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const sendData = ( tag ) => {
    setScreen(GROUP)
  };
  const copyIdea = ( text ) => {
    window.navigator.clipboard.writeText(text).then(function () {
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, 2000)
    })
  }

  return (
    <Card style={{cursor: 'pointer'}} className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000}>
        <Alert severity="success">
          Текст скопирован в буфер обмена!
        </Alert>
      </Snackbar>
      <CardHeader
        avatar={
          <Avatar src={author.avatar ? author.avatar : undefined} aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => like(num)}>
          <FavoriteIcon style={{color: isLike ? 'red' : undefined}}/>
          {rating + (isLike ? 1 : 0)}
        </IconButton>
        <IconButton onClick={() => copyIdea(text)} aria-label="share">
          <ShareIcon/>
        </IconButton>
        {/*  className={clsx(classes.expand, {*/}
        {/*    [classes.expandOpen]: expanded,*/}
        {/*  })}*/}
        {/*  onClick={handleExpandClick}*/}
        {/*  aria-expanded={expanded}*/}
        {/*  aria-label="show more"*/}
        {/*>*/}
        {/*  <ExpandMoreIcon/>*/}
        <div>
          {tags.map(( el, i ) => <IconButton onClick={() => sendData(el)}><Typography
            variant={'body1'}>{el}</Typography></IconButton>)}
        </div>
      </CardActions>
    </Card>
  );
}

const mstp = ( state ) => {
  return {
    screen: state.screen
  }
}
const mdtp = {
  setScreen
}

const ConnectIdea = connect(mstp, mdtp)(Idea)
export default ConnectIdea
