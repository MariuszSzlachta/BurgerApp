import React from 'react';

import NavigationItems from '../NavigationItems/NavigationIntems';
import Logo from '../../Logo/Logo';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToogle drawerToggleClicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar;