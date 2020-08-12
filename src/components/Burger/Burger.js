import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger =(props) => {
    console.log("ingredients:=",props);
    let transfromedIngredients=Object.keys(props.ingredients).map(igKey =>{
            return [...Array(props.ingredients[igKey])].map((_,i)=> {
                 return <BurgerIngredient key={igKey+i} type={igKey} />                                                                 
            });                                                                         
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if(transfromedIngredients.length===0){
        transfromedIngredients= <p>Please!! customize your Burger Ingredients. Thank You </p>
    }

    console.log("addes:",transfromedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transfromedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;