import React from 'react';

import {
  Typography,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  Divider,
  ClickAwayListener,
  makeStyles,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import BusinessIcon from '@material-ui/icons/Business';
import ComputerIcon from '@material-ui/icons/Computer';
import RoomIcon from '@material-ui/icons/Room';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavBarDrawer = ({ drawerOpen, handleDrawerClose }) => {
  const classes = useStyles();

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <>
      <Drawer variant={'temporary'} anchor={'left'} open={drawerOpen}>
        <ClickAwayListener onClickAway={handleDrawerClose}>
          <div>
            <IconButton onClick={handleDrawerClose} role="button">
              <ChevronLeftIcon />
              <Typography variant="button">Close</Typography>
            </IconButton>
            <Divider />
            <List
              component="nav"
              aria-label="home classes"
              className={classes.list}
            >
              <ListItemLink href="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                Home
              </ListItemLink>
              <Divider />
              <ListItemLink href="/classes">
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                Classes
              </ListItemLink>
              <ListItemLink href="/consulting">
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                Consulting
              </ListItemLink>
              <ListItemLink href="/services">
                <ListItemIcon>
                  <ComputerIcon />
                </ListItemIcon>
                Services
              </ListItemLink>
              <ListItemLink href="/directions">
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                Directions
              </ListItemLink>
              <ListItemLink href="/remote-learning">
                <ListItemIcon>
                  <HomeWorkIcon />
                </ListItemIcon>
                Remote Learning
              </ListItemLink>
              <ListItemLink href="/docs/Computer_Visions_Current_Schedule.pdf">
                <ListItemIcon>
                  <PictureAsPdfIcon />
                </ListItemIcon>
                Current Schedule
              </ListItemLink>
            </List>
          </div>
        </ClickAwayListener>
      </Drawer>
    </>
  );
};

export default NavBarDrawer;
