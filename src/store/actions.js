export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function addIngredient(){
  return {
    type: ADD_INGREDIENT
  }
}

export function removeIngredient(){
  return {
    type: REMOVE_INGREDIENT
  }
}