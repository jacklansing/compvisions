import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const ResponsiveHeading = ({
  children,
  component = 'h1',
  primary = 'h2',
  mobile = 'h4',
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        component={component}
        variant={primary}
        className={[classes.desktop, className].join(' ')}
        {...props}
      >
        {children}
      </Typography>
      <Typography
        component={component}
        variant={mobile}
        {...props}
        className={[classes.mobile, className].join(' ')}
      >
        {children}
      </Typography>
    </>
  );
};

export default ResponsiveHeading;
