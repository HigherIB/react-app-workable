import React, { useEffect, useRef, useState } from "react"
import ProductList from "./components/ProductList";



function App(){
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState('')

  // After render
  useEffect(() => {
    if (ref.current) ref.current.focus();
  })

  useEffect(() => {
    document.title = 'My App';
  })

  return (
    <div>
      <select name="categories" id="categories" className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">HouseHold</option>
      </select>
      <ProductList category={category} />
      <input ref={ref} type="text" className="form-control" />
    </div>
  ) 
}

export default App 