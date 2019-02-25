import React, { Component } from 'react';
import { Route, Redirect } from  'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to="/" />;
    
    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <React.Fragment>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ingredients}
            checkoutCanceled={this.checkoutCanceledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </React.Fragment>
      )
    }
    return summary;

  }
}

const mapStateToProps = state => {
  const { ingredients } = state.burgerBuilderReducer;
  const { purchased } = state.orderReducer;
  return {
    ingredients,
    purchased
  }
};



export default connect(mapStateToProps)(Checkout);