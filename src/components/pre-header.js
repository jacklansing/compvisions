import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    margin: theme.spacing(2),
    marginLeft: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
  },
  listItem: {
    paddingLeft: theme.spacing(2),
  },
}));

const PreHeader = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.listItem}>16 Corporate Woods Boulevard</li>
        <li className={classes.listItem}>Albany, NY 12211</li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <a href="tel:(518) 437-1600">{'(518) 437-1600'}</a>
        </li>
        <li className={classes.listItem}>
          <a href="mailto:vision@compvisions.com">vision@compvisions.com</a>
        </li>
      </ul>
    </div>
  );
};

export default PreHeader;
