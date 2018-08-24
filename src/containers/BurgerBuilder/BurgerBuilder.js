import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      becon: 0,
      cheese: 0,
      meat: 0,
    }
  }
  render() {
    return (
      <div>
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <div>Build controll</div>
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;