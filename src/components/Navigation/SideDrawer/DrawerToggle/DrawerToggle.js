import React from 'react';

import classes from './DrawerToogle.css';

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.drawerToggleClicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;