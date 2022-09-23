import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../cart/CartIcon';
import classes from "./headerButton.module.css"
import CartContext from '../../store/cartContext';

const HeaderButton = (props) =>{

  const [animated,setAnimated] = useState(false)

const context = useContext(CartContext)

const numOfItems = context.items.reduce((currentNum, item)=>{
    return currentNum + item.amount 
}, 0)

const btnClasses = `${classes.button} ${animated ? classes.bump : ""}`


const {items} = context

useEffect(()=>{
    if(items.length === 0){
        return;
    }
    setAnimated(true)
   const timer = setTimeout(()=>{
        setAnimated(false)
    }, 300)

return () =>{
    clearTimeout(timer)
}

},[items])

return <button className={btnClasses} onClick={props.onShowModal}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
       {numOfItems} 
    </span>
</button>
}


export default HeaderButton