import { ADD_INGREDIENT, REMOVE_INGREDIENT } from './actions';

const initialState = {
  ingredients: null,
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const ingredients = [...state.ingredients];
      
      return {
        ...state,
      }

    default:
      return state;
  }
}

export default reducer;