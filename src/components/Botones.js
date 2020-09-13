import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./../assets/Botones.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Botones() {
  const classes = useStyles();

  return (
    <div className="boton">
      <Button variant="contained" color="primary">
        The Game
      </Button>
    </div>
  );
}
