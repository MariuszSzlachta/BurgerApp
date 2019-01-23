import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_START, PURCHASE_INIT } from '../actions/order';

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
        purchased: true
      }
      return {
        ...state,
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

    default:
      return state;
  }
}

export default orderReducer;