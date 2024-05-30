import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";

import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";


function App(){
  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <div>
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