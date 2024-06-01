import React, { useEffect, useRef } from "react"



function App(){
  const ref = useRef<HTMLInputElement>(null);


  // After render
  useEffect(() => {
    if (ref.current) ref.current.focus();
  })

  useEffect(() => {
    document.title = 'My App';
  })
  
  return (
    <div>
      <input ref={ref} type="text" className="formControl" />
    </div>
  ) 
}

export default App 