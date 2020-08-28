import React, { useRef, useState } from 'react';
import { func } from 'prop-types';

import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color: '#f44336',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
    headerContainer: {
      marginBottom: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
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
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#f44336',
  },
}));

export const Header = ({ searchVideo, toggleFavorites, authUser }) => {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Grid container className={classes.headerContainer}>
        <Grid item xs={12}>
          <AppBar className={classes.root} position="static">
            <Toolbar>
              <IconButton
                onClick={() => setMenuIsOpen(true)}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h5" noWrap>
                The territory of your music
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  inputRef={inputEl}
                  onChange={() => searchVideo(inputEl.current.value.toLowerCase())}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Avatar aria-label="recipe" className={classes.avatar} onClick={() => authUser(false)}>
                Exit
              </Avatar>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      {menuIsOpen && (
        <Grid container className="menu-container" onClick={() => setMenuIsOpen(false)}>
          <Grid className="menu-list" item xs={3}>
            <List>
              <ListItem button key="Favorites videos" onClick={() => toggleFavorites(true)}>
                <ListItemText primary="Favorites videos" />
              </ListItem>
              <ListItem button key="All videos" onClick={() => toggleFavorites(false)}>
                <ListItemText primary="All videos" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      )}
    </>
  );
};

Header.propTypes = {
  searchVideo: func.isRequired,
  toggleFavorites: func.isRequired,
  authUser: func.isRequired,
};
