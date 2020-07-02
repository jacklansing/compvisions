import React from 'react';
import ResponsiveHeading from './utils/responsive-heading';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    height: '100%',
  },
  iconContainer: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
  },
}));

const SatisfactionStep = ({
  title = '',
  renderIcon = () => null,
  children = null,
}) => {
  const classes = useStyles();

  return (
    <Grid item sm={6}>
      <Card className={classes.root}>
        <div className={classes.iconContainer}>{renderIcon()}</div>
        <ResponsiveHeading
          component="h3"
          primary="h4"
          mobile="h5"
          className={classes.title}
        >
          {title}
        </ResponsiveHeading>
        <CardContent className={classes.content}>
          <Typography variant="body1" component="p">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SatisfactionStep;
