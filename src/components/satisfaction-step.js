import React from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';

const SatisfactionStep = ({ title, children }) => {
  return (
    <>
      <Grid item md={5}>
        <Typography component="h4" variant="h4">
          {title}
        </Typography>
        <Divider />
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
