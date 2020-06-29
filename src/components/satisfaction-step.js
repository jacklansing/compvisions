import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const SatisfactionStep = ({ step, title, children }) => {
  return (
    <>
      <Grid item md={5}>
        <Typography component="h4" variant="h4">
          {step}. {title}
        </Typography>
      </Grid>
      <Grid item md={7}>
        <Typography variant="body1" component="p">
          {children}
        </Typography>
      </Grid>
    </>
  );
};

export default SatisfactionStep;
