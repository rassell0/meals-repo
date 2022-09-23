import React, { useContext } from 'react';
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cartContext';

const MealItem = (props) =>{

const cartContext = useContext(CartContext)

const price = `$${props.price.toFixed(2)}`


const addToCart = amount =>{
cartContext.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
})
}

    return <li className={classes.meal} >

<div>
     <h3>{props.name}</h3>
     <div className={classes.description} >{props.description} </div>
     <div className={classes.price}>{price} </div>
</div>
<div>

    <MealItemForm onAddToCart = {addToCart} id={props.id}/>
</div>

    </li>
}

export default MealItem