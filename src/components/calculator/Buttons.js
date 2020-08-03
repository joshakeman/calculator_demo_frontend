import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttonOverride: {
      marginTop: 2,
      marginBottom: 0,
      height: 65,
      width: '100%'
  },
  buttonOverrideIndividual: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 1,
    marginRight: 1,
    height: 65,
    width: '25%',
  }
}));

export default function Buttons({ display, update, equals }) {
  const classes = useStyles();

  useEffect(()=> console.log("display changed!", [display]))

  return (
    <div className={classes.root}>
      <ButtonGroup size="large" variant="contained" color="default" aria-label="contained primary button group" classes={{root: classes.buttonOverride}}>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('1'))}>1</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('2'))}>2</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('3'))}>3</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} color="primary" variant="contained" onClick={() => update(display.concat(' + '))}>+</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained" color="default" aria-label="outlined primary button group" classes={{root: classes.buttonOverride}}>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('4'))}>4</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('5'))}>5</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('6'))}>6</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} color="primary" variant="contained" onClick={() => update(display.concat(' - '))}>-</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained" color="default" aria-label="outlined primary button group" classes={{root: classes.buttonOverride}}>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('7'))}>7</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('8'))}>8</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('9'))}>9</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} color="primary" variant="contained" onClick={() => update(display.concat(' * '))}>X</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained" color="default" aria-label="outlined primary button group" classes={{root: classes.buttonOverride}}>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('.'))}>.</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => update(display.concat('0'))}>0</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} onClick={() => equals()}>=</Button>
        <Button classes={{root: classes.buttonOverrideIndividual}} color="primary" variant="contained" onClick={() => update(display.concat(' / '))}>/</Button>
      </ButtonGroup>
      <ButtonGroup size="large" fullWidth={true} variant="contained" color="secondary" aria-label="text primary button group">
        <Button onClick={() => update('')}>Clear</Button>
      </ButtonGroup>
    </div>
  );
}

