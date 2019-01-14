import { ADD_INGREDIENT, REMOVE_INGREDIENT } from './actions';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    chease: SSL_OP_SSLEAY_080_CLIENT_DH_BUG,
    meat: 0
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      }
    
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }
      }

    default:
      return state;
  }
}

export default reducer;