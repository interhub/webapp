import { setGroup, setUser } from "../../store/actions";
import { connect } from "react-redux";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(( theme ) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


function ListGroups( {list, setGroup, setActive, active} ) {
  const classes = useStyles();

  const handleChange = ( num ) => {
    setActive(num);
    if (num < 0) {
      //если своя группа
      return
    }
    setGroup([...list][num])
  };

  return (
    <div className={classes.root}>
      {list.map(( el, i ) => {
        return <ExpansionPanel style={{backgroundColor: '#c3c3c36e',}} key={i} expanded={active === i}
                               onChange={() => handleChange(i)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon/>}
          >
            <Typography variant={'h6'} style={{textAlign: 'left'}} className={classes.heading}>{el.name}</Typography>
            <Typography
              className={classes.secondaryHeading}>{active === i ? "Ваша идея будет добавлена в эту группу" : ""}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Последняя актуальная идея: {el.rel_text}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      })}

      {/*// Добавить свою группу*/}
      {list && list.length > 0 &&
      < ExpansionPanel style={{backgroundColor: '#c3c3c36e',}} expanded={active === -1}
                       onChange={() => handleChange(-1)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography variant={'h6'} style={{textAlign: 'left'}} className={classes.heading}>
            *Создать свою группу
          </Typography>
          <Typography
            className={classes.secondaryHeading}>{active === -1 ? "Ваша идея будет добавлена в новую группу" : ""}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Вы можете создать свою группу идей. У вас есть единомышленники, которые вас поддержат!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>}
    </div>

  );
}


const mstp = ( state ) => {
  return {
    screen: state.screen,
    user: state.user,
    group: state.group
  }
}
const mdtp = {
  setUser,
  setGroup
}

const ConnectListGroups = connect(mstp, mdtp)(ListGroups)

export default ConnectListGroups





