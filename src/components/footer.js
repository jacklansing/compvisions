import React from 'react';
import { Link } from 'gatsby';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
    backgroundColor: theme.palette.grey[200],
  },
  container: {
    width: 'inherit',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column wrap',
    },
  },
  child: {
    [theme.breakpoints.down('md')]: {
      alignSelf: 'center',
      textAlign: 'center',
      width: 'fit-content',
      marginTop: theme.spacing(2),
    },
  },
  socialContainer: {
    '& a': {
      padding: 0,
    },
  },
  social: {
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.25rem',
    },
  },
  copyright: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
  bottomNav: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      padding: theme.spacing(0.25),
    },
    '& a': {
      textDecoration: 'none',
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <Typography component="div" className={classes.child}>
          <Typography variant="h6">Navigation</Typography>
          <nav>
            <ul className={classes.bottomNav}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/consulting">Consulting</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/directions">Directions</Link>
              </li>
              <li>
                <Link to="/remote-learning">Remote Learning</Link>
              </li>
            </ul>
          </nav>
        </Typography>
        <Typography component="div" className={classes.child}>
          <Typography variant="h6">Contact Us</Typography>
          <p>
            16 Corporate Woods Boulevard
            <br />
            Albany, NY 12211
          </p>
          <p>
            <a href="tel:(518) 437-1600">
              <CallIcon
                style={{ verticalAlign: 'middle', paddingRight: '0.1rem' }}
              />
              {'(518) 437-1600'}
            </a>
            <br />
            <a href="mailto:vision@compvisions.com">
              <EmailIcon
                style={{ verticalAlign: 'middle', paddingRight: '0.1rem' }}
              />
              vision@compvisions.com
            </a>
          </p>
          <div className={classes.socialContainer}>
            <IconButton
              aria-label="facebook link"
              component="a"
              href="https://www.facebook.com/Compvisions"
            >
              <FacebookIcon className={classes.social} />
            </IconButton>
            <IconButton
              aria-label="linkedin link"
              component="a"
              href="https://www.linkedin.com/company/computer-visions-llc/about/"
            >
              <LinkedInIcon className={classes.social} />
            </IconButton>
          </div>
        </Typography>
      </div>
      <Typography className={classes.copyright}>
        © {new Date().getFullYear()} Computer Visions, All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
