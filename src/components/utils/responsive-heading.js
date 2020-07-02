import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ResponsiveHeading = ({
  children,
  component = 'h1',
  primary = 'h2',
  mobile = 'h4',
  ...props
}) => {
  const theme = useTheme();
  const reduceToMobile = !useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Typography
      component={component}
      variant={reduceToMobile ? mobile : primary}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default ResponsiveHeading;
