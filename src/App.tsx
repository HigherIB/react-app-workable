import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";

import Alert from "./components/Alert";
import Button from "./components/Button";

function App(){
  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <div>
      <BsFillCalendarFill color="blue" size="40" />
      {alertVisible && 
      <Alert onClose={() => setAlertVisibility(false)}>
        check this alert
      </Alert>}
      
      <Button onClick={() => setAlertVisibility(true)}>SHOW MORE!</Button>
    </div>
  ) 
}

export default App