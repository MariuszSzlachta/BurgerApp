import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Aux>
          <Burger />
          <div>Build controll</div>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;