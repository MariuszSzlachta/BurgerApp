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

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderID })
  return updateObject(state, {
    purchased: true,
    loading: false,
    orders: state.orders.concat(newOrder)
  });
}

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false })
}

const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    orders: action.orders
  });
}

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false })
}
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
    case PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case PURCHASE_INIT: return purchaseInit(state, action);
    case FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    case FETCH_ORDERS_FAILED: return fetchOrdersFail(state, action);
    default:
      return state;
    }
  }

export default orderReducer;