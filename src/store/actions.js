export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function addIngredient(ingredientName){
  return {
    type: ADD_INGREDIENT,
    ingredientName
  }
}

export function removeIngredient(ingredientName){
  return {
    type: REMOVE_INGREDIENT,
    ingredientName
  }
}