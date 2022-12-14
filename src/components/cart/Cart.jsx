import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css"
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';

const Cart = (props) =>{

const cartContext = useContext(CartContext)

const cartItemRemoveHandler = id =>{
cartContext.removeItem(id)

}

const cartItemAddHandler = item =>{    
cartContext.addItem({...item,amount:1})
}


const cartItems=
<ul className={classes["cart-items"]} > 
{cartContext.items.map(item => 
<CartItem 
    key={item.id} 
    name ={item.name}
    amount={item.amount}
    price={item.price}
    onRemove ={cartItemRemoveHandler.bind(null,item.id)}
    onAdd = {cartItemAddHandler.bind(null, item)}
    />)}
</ul>

const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
const hasItems = cartContext.items.length > 0



return (<Modal onHideModal = {props.onHideModal}>
{cartItems}
<div className= {classes.total}>
    <span>Total amount</span>
    <span>{totalAmount}</span>
</div>
<div className={classes.actions}>
<button className={classes["button--alt"]} onClick={props.onHideModal} >Close</button>
{hasItems && <button className={classes.button} >Order</button>}

</div>

</Modal>)
}

export default Cart