import { 
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED } from '../actions/order';

const initialState = {
  orders: [],
  loading: false,
  error: false,
  purchased: false
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderID,
      }
      return {
        ...state,
        purchased: true,
        loading: false,
        orders: state.orders.concat(newOrder)
      };

    case PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }

    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      }
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      }

    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.orders
      }

    case FETCH_ORDERS_FAILED:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
}

export default orderReducer;