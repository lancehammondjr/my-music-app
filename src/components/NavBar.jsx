import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar position="sticky">
          <Toolbar>
            <Typography component="h1">
                My Music App
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;
