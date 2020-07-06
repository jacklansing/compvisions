import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
  container: {
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  social: {
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.25rem',
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
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
        © {new Date().getFullYear()} Computer Visions, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  );
};

export default Footer;
