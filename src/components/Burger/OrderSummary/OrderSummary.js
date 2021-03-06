import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey =>{
        return (
             <li key={igKey}>
                 <span style={{textTransform: 'capitalize'}}>{igKey}</span> :: {props.ingredients[igKey]}
            </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous Burger with the following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total price : Rs-{props.price}/.</strong></p>
            <p>Continue or checkout?</p>
            <Button btnType="Danger" clicked={props.clickedCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.clickedContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;