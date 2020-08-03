import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 360,    
    marginTop: theme.spacing(1),
    '& > *': {
    //   marginBottom: theme.spacing(1),
      minWidth: 200,
      height: 30,
    //   padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'center'
    },
  },
  leftAlign: {
      marginRight: 'auto',
    //   marginTop: 0,
    //   marginBottom: 0
  },
  rightAlign: {
      marginLeft: 'auto',
    //   marginTop: 0,
    //   marginBottom: 0
  },
  content: {
      paddingLeft: 10,
      paddingRight: 10
  }
}));

export default function Message({ content, place }) {
  const classes = useStyles();

  console.log(place)
  return (
      <Paper elevation={1} className={place % 2 === 0 ? `${classes.root} ${classes.rightAlign}` : `${classes.root} ${classes.leftAlign}`}>
        <p className={classes.content}>{content}</p>
      </Paper>
    //</div>
  );
}