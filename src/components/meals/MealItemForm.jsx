import React, { useRef, useState } from 'react';
import Input from '../UI/input';
import classes from "./mealItemForm.module.css"

const MealItemForm = (props) =>{
const [validAmount, setValidAmount] = useState(true)
    const amountInputRef = useRef();
     
const submitHandler = (event) =>{
event.preventDefault()

const enteredAmount = amountInputRef.current.value
const num = +enteredAmount

if(enteredAmount.trim().length === 0 || num < 1 || num > 5){
    setValidAmount(false)
    return
}

props.onAddToCart(num)
}

return <form className={classes.form} onSubmit={submitHandler} >
   <Input 
   ref={amountInputRef}
   label = "amount" input={{
    id:"amount" + props.id,
    type:"num",
    min:"1",
    max:"4",
    step:"1",
    defaultValue:"1"
   }} />
    <button>Add</button>
    {!validAmount && <p>Please enter a valid amount</p>}
</form>
}

export default MealItemForm