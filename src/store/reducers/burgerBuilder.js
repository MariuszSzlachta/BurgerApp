import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } from '../actions/ingredients';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1};
  const updatedInredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedInredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state.ingredients, updatedState)
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ...state,
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false
  });
}

const fetchIngFail = (state, action) => {
  return updateObject(state, { error: true })
}

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: return addIngredient(state, action);
    case REMOVE_INGREDIENT: return removeIngredient(state, action);
    case SET_INGREDIENTS: return setIngredients(state, action);
    case FETCH_INGREDIENTS_FAILED: return fetchIngFail(state, action);
    default:
      return state;
  }
}

export default burgerBuilderReducer;

