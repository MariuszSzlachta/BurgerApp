import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrdersRequest } from '../../store/actions/order';

import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';



class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrdersRequest();
  }

  render() {

    let orders = (
      this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))
    )

    if (this.props.loading) {
      orders = <Spinner />
    }
    return (
      <div>
        {orders}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { orders, loading } = state.orderReducer;
  return {
    orders,
    loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrdersRequest: () => dispatch(fetchOrdersRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));