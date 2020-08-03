import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row wrap',
    margin: theme.spacing(2),
    marginLeft: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
  },
  listItem: {
    paddingLeft: theme.spacing(2),
  },
  buttonLink: {
    minWidth: '205px',
    height: 'fit-content',
    alignSelf: 'center',
  },
}));

const PreHeader = (props) => {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          16 Corporate Woods Boulevard, Albany, NY 12211
        </li>
        <li className={classes.listItem}>
          <a href="tel:(518) 437-1600">
            <CallIcon
              style={{ verticalAlign: 'middle', paddingRight: '0.1rem' }}
            />
            {'(518) 437-1600'}
          </a>
        </li>
        <li className={classes.listItem}>
          <a href="mailto:vision@compvisions.com">
            <EmailIcon
              style={{ verticalAlign: 'middle', paddingRight: '0.1rem' }}
            />
            vision@compvisions.com
          </a>
        </li>
      </ul>
      <Button
        component="a"
        color="primary"
        variant="contained"
        size="medium"
        href="/docs/current_schedule.pdf"
        target="_blank"
        className={classes.buttonLink}
      >
        <PictureAsPdfIcon style={{ marginRight: '0.3345rem' }} />
        Current Schedule
      </Button>
    </Typography>
  );
};

export default PreHeader;
