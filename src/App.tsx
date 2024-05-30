import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";

import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App(){
  const [alertVisible, setAlertVisibility] = useState(false)
  const [cartItems, setCartItems] = useState(['product2', 'product3'])

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClick={() => setCartItems([])} />
      <Like onClick={() => console.log("clicked")
      } />
      {alertVisible && 
      <Alert onClose={() => setAlertVisibility(false)}>
        check this alert
      </Alert>}
      
      <Button onClick={() => setAlertVisibility(true)}>SHOW MORE!</Button>
    </div>
  ) 
}

export default App