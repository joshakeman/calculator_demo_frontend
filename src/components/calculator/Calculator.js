import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Screen from './Screen'
import Buttons from './Buttons'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      width: 340,
      //height: theme.spacing(16),
    },
  },
  paper: {
      backgroundColor: '#484848'
  }
}));

export default function Calculator({ conn }) {
  const classes = useStyles();

  const [display, updateDisplay] = useState("")

  const equals = () => {
      let equals = eval(display)
      let fullString = display + ' = ' + equals
      console.log(fullString)
      updateDisplay("")
      conn.send(fullString) 
  }

  //const conn = new WebSocket("ws://localhost:8080/ws")
  return (
    <div className={classes.root}>
      <Paper classes={{root: classes.paper}} elevation={3}>
          <Screen display={display}/>
          <Buttons display={display} update={updateDisplay} equals={equals}/>
      </Paper>
    </div>
  );
}

