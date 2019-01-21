import axios from '../../axios-orders';

export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';

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
    axios.post('/orders.json', orderData)
    .then(res => {
      dispatch(purchaseBurgerSuccess(res.data, orderData));
    })
    .catch(error => {
      dispatch(purchaseBurgerFail(error))
    })
  }
}

