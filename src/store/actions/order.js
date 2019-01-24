import axios from '../../axios-orders';

export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_INIT = 'PURCHASE_INIT';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START
  }
}

export const purchaseBurgerSuccess = (orderID, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderID,
    orderData
  }
}

export const purchaseBurgerFail = error => {
  return {
    type: PURCHASE_BURGER_FAIL,
    error
  }
}


export const purchaseBurgerRequest = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json', orderData)
    .then(res => {
      dispatch(purchaseBurgerSuccess(res.data.name, orderData));
    })
    .catch(error => {
      dispatch(purchaseBurgerFail(error))
    })
  }
}


export const purchaseInit = () => {
  return {
    type: PURCHASE_INIT
  }
}

export const fetchOrderStart = () => {
  return {
    type: FETCH_ORDERS_START
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders
  }
}

export const fetchOrdersFailed = (error) => {
  return {
    type: FETCH_ORDERS_FAILED,
    error
  }
}

export const fetchOrdersRequest = () => {
  return dispatch => {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for ( let key in res.data){
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFailed(err))
      })
  }
}