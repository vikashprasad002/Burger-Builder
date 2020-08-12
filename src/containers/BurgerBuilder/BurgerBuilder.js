import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENTS_PRICE ={
    salad: 10,
    cheese: 20,
    meat: 30,
    bacon: 15
};
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 40,
        purchaseable: false,
        purchasing: false
    }
    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients).map(igKey => {
                        return ingredients[igKey];
                    })
                    .reduce((sum,el)=>{
                        return sum+el;
                    },0);
        this.setState({purchaseable: sum>0});
    }

    addIngredientHandler=(type)=> {
        const oldCount=this.state.ingredients[type];
        const updateCount=oldCount+1;
        const updateIngredients={
            ...this.state.ingredients
        };
        updateIngredients[type]=updateCount;
        const price=INGREDIENTS_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+price;
        this.setState({totalPrice: newPrice,ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }
    removeIngredientHandler=(type) =>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<= 0){
            return;
        }
        const updateCount=oldCount-1;
        const updateIngredients={
            ...this.state.ingredients
        };
        updateIngredients[type]=updateCount;
        const price=INGREDIENTS_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-price;
        this.setState({totalPrice: newPrice,ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);   
    }

    purchaseHandler=()=>{
        this.setState({purchasing: true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing: false});
    }
    
    purchaseContinueHandler=()=>{
        alert('you continue');
    }
    render(){
        const disableInfo={
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0;
        }
        return(
                <Aux>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <Ordersummary 
                        ingredients={this.state.ingredients} 
                        clickedCancel={this.purchaseCancelHandler} 
                        clickedContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                        />
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <Buildcontrols  ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disable={disableInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    />
                </Aux>
        );
    }
}

export default BurgerBuilder;