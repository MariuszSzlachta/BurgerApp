import axios from '../../axios-orders';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED'


export const addIngredient = (ingredientName) =>{
  return {
    type: ADD_INGREDIENT,
    ingredientName
  }
}

export const removeIngredient = (ingredientName) => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: "SET_INGREDIENTS",
    ingredients
  }
}

export const setIngredientsRequest = () => {
  return dispatch => {
    axios.get('https://burger-app1.firebaseio.com/ingredients.json')
      .then(res => {
        dispatch(setIngredients(res.data))
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed())
      })
  }
}
