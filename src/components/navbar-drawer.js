import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default NavBarDrawer;
