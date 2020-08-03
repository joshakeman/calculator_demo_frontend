import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Message from './Message'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: theme.spacing(1),
    width: 600,
    // '&:nth-child(even)': {
    //     '& > *': {
    //         marginLeft: 'auto'
    //     }
    // },
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: 600,
    //   //height: theme.spacing(16),
    // },
  },
}));

export default function MessageList({ messages }) {
  const classes = useStyles();
console.log(messages)
  useEffect(() => console.log("messages changed!", typeof messages), [messages])

  return (
      <Paper elevation={0} className={classes.root}>
          {messages.map((msg, ind) => {
            console.log(msg)
            return <Message content={msg} place={ind} />  
          })} 
          {/* <Message content="3 * 5 + 4 = 4743" place={1} />
          <Message content="12 - 1 = 743" place={2} />
          <Message content="14 / 9 = 1.33"  place={3} />
          <Message content="3 * 5 + 4 = 4743" place={4} />
          <Message content="12 - 1 = 743" place={5} />
          <Message content="14 / 9 = 1.33"  place={6} />
          <Message content="3 * 5 + 4 = 4743" place={7} />
          <Message content="12 - 1 = 743" place={8} />
          <Message content="14 / 9 = 1.33"  place={9} />
          <Message content="14 / 9 = 1.33"  place={10} /> */}
      </Paper>
  );
}

