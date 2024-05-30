import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";

import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText"

function App(){
  const [alertVisible, setAlertVisibility] = useState(false)
  const [cartItems, setCartItems] = useState(['product2', 'product3'])
  const [game, setGame] = useState({
    id:1,
    player: {
      name: 'John'
    }
  })

  const [maxChar, setMaxChar] = useState(10);
  const handleClick = () => {
    setGame({...game, player: { name: "bob"}})
  }

  const handleExpand = () => {
    if(maxChar) setMaxChar(100);
  }
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
      
      <ExpandableText onClick={handleExpand} charCount={maxChar}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quisquam quidem officia eos maiores sunt, ex pariatur tempore autem rerum quos perspiciatis obcaecati optio animi nemo et eum id? Autem!
      </ExpandableText>
    </div>
  ) 
}

export default App