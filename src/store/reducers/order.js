import { 
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED } from '../actions/order';

import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  error: false,
  purchased: false
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = updateObject(action.orderData, { id: action.orderID })
      return updateObject(state, {
        purchased: true,
        loading: false,
        orders: state.orders.concat(newOrder)
      });

    case PURCHASE_BURGER_FAIL:
      return updateObject(state, { loading: false });

    case PURCHASE_BURGER_START:
      return updateObject(state, { loading: true })

    case PURCHASE_INIT:
      return updateObject(state, { purchased: false })

    case FETCH_ORDERS_START:
      return updateObject(state, { loading: true })

    case FETCH_ORDERS_SUCCESS:
      return updateObject(state, {
        loading: false,
        orders: action.orders
      });

    case FETCH_ORDERS_FAILED:
      return updateObject(state, { loading: false })

    default:
      return state;
    }
  }

export default orderReducer;