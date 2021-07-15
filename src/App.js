import React,{useState} from 'react'
import Cart from './components/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals'
import CartProvider from './store/CartProvider';
function App() {

  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true)
  }
  const hideCartHandler = () => {
    setCartShown(false)
  }
  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
