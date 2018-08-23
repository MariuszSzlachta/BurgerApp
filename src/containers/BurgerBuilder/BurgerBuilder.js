import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      becon: 1,
      cheese: 2,
      meat: 2,
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