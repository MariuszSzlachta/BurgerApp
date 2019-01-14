import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import { addIngredient, removeIngredient } from '../../store/actions';

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
    loading: false,
    error: null
  }
  componentDidMount() {
    // axios.get('https://burger-app1.firebaseio.com/ingredients.json')
    //   .then(res => {
    //     this.setState({ ingredients: res.data})
    //   })
    //   .catch(error => {
    //     this.setState({error: true})
    //   })
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

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push( encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]) )
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString

    });
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
    let burger = this.state.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded</p> : <Spinner />

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
    if (this.state.loading) {
      orderSummary = <Spinner />
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
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (ingredientName) => dispatch(addIngredient(ingredientName)),
    onRemoveIngredient: (ingredientName) => dispatch(removeIngredient(ingredientName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));