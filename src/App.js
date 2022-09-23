import React, {useState} from 'react';
import Cart from './components/cart/Cart';
import Header from "./components/layout/header";
import Meals from './components/meals/meals';
import CartProvider from './store/CartProvider';


function App() {

const [readyToCheckout, setreadyToCheckout] = useState(false);

const showModal = () =>{
  setreadyToCheckout(true)
}
const hideModal = () =>{
  setreadyToCheckout(false)
}


  return (
    <CartProvider>
 {readyToCheckout && <Cart onHideModal ={hideModal} />}
      <Header onShowModal = {showModal}/>
    <Meals/>
    </CartProvider>
  );
}

export default App;
