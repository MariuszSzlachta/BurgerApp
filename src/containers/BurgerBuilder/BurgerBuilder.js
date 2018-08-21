import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Aux>
          <div>Burger</div>
          <div>Build controll</div>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;