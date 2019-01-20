import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient, removeIngredient, setIngredientsRequest } from '../../store/actions/ingredients';
import axios from '../../axios-orders';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  }
  componentDidMount() {
    this.props.onSetIngredientsRequest();
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  render() {
    const disableInfo = {
      ...this.props.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }

    // order summary
    let orderSummary = null;
    let burger = this.props.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded</p> : <Spinner />

    // burger
    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.onAddIngredient}
            ingredientRemoved={this.props.onRemoveIngredient}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            ordered={this.purchaseHandler}
            disabled={disableInfo}
            price={this.props.totalPrice}
          />
        </Aux>
      )
      orderSummary = (
        <OrderSummary 
          ingredients={this.props.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.totalPrice}
        />
      )
    }

    return (
      <div>
        <Aux>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            {orderSummary}
          </Modal>
          { burger }
        </Aux>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { totalPrice, ingredients, error } = state
  return {
    ingredients,
    totalPrice,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingredientName) => dispatch(addIngredient(ingredientName)),
    onRemoveIngredient: (ingredientName) => dispatch(removeIngredient(ingredientName)),
    onSetIngredientsRequest: () => dispatch(setIngredientsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));