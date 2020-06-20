import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles(( theme ) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray( {tags, setTags} ) {
  const classes = useStyles();


  const handleDelete = ( chipToDelete ) => () => {
    setTags(( chips ) => chips.filter(( chip ) => chip.key !== chipToDelete.key));
  };

  return (
    // <Paper component="ul" className={classes.root}>
    <div  className={classes.root}>
      {tags.map(( el, i ) => {
        let icon;

        if (i === 1) {
          icon = <TagFacesIcon/>;
        }

        return (
          <li key={i}>
            <Chip
              icon={icon}
              label={el}
              onDelete={() => handleDelete(el)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </div>
    // </Paper>
  );
}
