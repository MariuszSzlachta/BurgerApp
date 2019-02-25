import React from 'react';
import { withRouter } from 'react-router-dom'

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // ['salad','chease' itp]
  // [Array(3), Array(1)] w nawiasie ilość elementów w arrayu
  // [ {...}, {...}] po reduce to są obiekty każdy obiekt to element jsx
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);


  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Pleaase start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);