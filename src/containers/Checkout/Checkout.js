import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingrediets: {
      salad: 1,
      meet: 1,
      bacon: 1,
      cheese: 1
    }
  }
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingrediets} />
      </div>
    );
  }
}

export default Checkout;