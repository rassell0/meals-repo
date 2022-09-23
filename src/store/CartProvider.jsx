import React, {useReducer} from 'react';
import CartContext from './cartContext';




const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state , action) =>{

    if(action.type === "ADD"){
        
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount


        const cartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const exsistingItem = state.items[cartItemIndex]
      
        
        let updatedItems;

        if(exsistingItem){
           const updatedItem = {
                ...exsistingItem,
                amount: exsistingItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[cartItemIndex] = updatedItem
        }else{
            
            updatedItems = state.items.concat(action.item)
        }

        

        
        return {
            items:updatedItems,
            totalAmount: newTotalAmount
        }
    }

if(action.type === "REMOVE"){


   const exsistingCartItemIndex = state.items.findIndex(item => item.id === action.id)
   const exsistingItems = state.items[exsistingCartItemIndex]
const updatedTotalAmount = state.totalAmount - exsistingItems.price
let lessItems ;
if(exsistingItems.amount ===1){
lessItems = state.items.filter(item => item.id !== action.id)
}else{
const less = {...exsistingItems, amount: exsistingItems.amount - 1}
lessItems = [...state.items];
lessItems[exsistingCartItemIndex] = less
}

return{
    items:lessItems,
    totalAmount:updatedTotalAmount
}

}


    return defaultCartState
}


const CartProvider = (props) =>{

   const [cartState, dispatchCartState] =  useReducer(cartReducer, defaultCartState)
    

    const addItemToCart = (item) =>{
        dispatchCartState({type:"ADD", item:item})
    }
    const removeItemFromCart = (id) =>{
        dispatchCartState({type:"REMOVE", id:id})
    }

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemFromCart
    }



return <CartContext.Provider value={cartContext}>

    {props.children}
</CartContext.Provider>
}

export default CartProvider