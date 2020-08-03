import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SatisfactionStepsContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </div>
  );
};

export default SatisfactionStepsContainer;
