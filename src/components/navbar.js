import React, { useState } from 'react';
import { navigate, Link } from 'gatsby';

import NavBarDrawer from './navbar-drawer';
import { FullMoonIcon } from './utils/svg-icons';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textTransform: 'uppercase',
  },
  titleIcon: {
    marginRight: theme.spacing(1),
    visibility: 'hidden',
    [theme.breakpoints.up('sm')]: {
      visibility: 'visible',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    maxHeight: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '22ch',
      },
    },
  },
  classicNav: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexFlow: 'row no-wrap',
    justifyContent: 'space-around',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
    },
    '& li': {
      position: 'relative',
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  activeLink: {
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 3,
      left: 0,
      width: '100%',
      borderBottom: '2px solid white',
    },
  },
}));

function NavBar({ siteTitle, showSearch = true }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate('/classes', {
        state: { searchText: e.target.value },
      });
    }
  };

  const classicNav = () => (
    <nav>
      <Typography component="ul" className={classes.classicNav}>
        <li>
          <Link activeClassName={classes.activeLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.activeLink} to="/classes">
            Classes
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.activeLink} to="/consulting">
            Consulting
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.activeLink} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.activeLink} to="/directions">
            Directions
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.activeLink} to="/remote-learning">
            Remote Learning
          </Link>
        </li>
      </Typography>
    </nav>
  );

  return (
    <div className={classes.root}>
      <NavBarDrawer
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <AppBar
        position="static"
        style={{ backgroundColor: '#314e88', color: 'white' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <FullMoonIcon className={classes.titleIcon} />
          <Typography className={classes.title} variant="h6" noWrap>
            {siteTitle}
          </Typography>
          {classicNav()}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Classes.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search classes' }}
              onKeyPress={(e) => handleSearch(e)}
              disabled={!showSearch}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
