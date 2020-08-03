import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: '100%',
      height: 65,
      //height: theme.spacing(16),
    },
  },
  display: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100%'
  },
  screenShadow: {
      backgroundColor: '#dfdac6',
      boxShadow: `inset 0px 2px 1px -1px rgba(0,0,0,0.2), inset 0px 1px 1px 0px rgba(0,0,0,0.14), inset 0px 1px 3px 0px rgba(0,0,0,0.12)`
    }
}));

export default function Screen({ display }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper classes={{root: classes.screenShadow}} elevation={1}>
          <div className={classes.display}>
            {display}
          </div>
      </Paper>
    </div>
  );
}
