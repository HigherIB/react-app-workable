import { useState } from "react";

function ListGroup() {
  const cities = [
    'Accra',
    'Pretoria',
    'Dodoma',
    'Mombasa',
    'Tripoli',
    'Lagos',
  ]

  let [selectedIndex, setSelectedIndex] = useState(-1);

    return (
      <>
        <h1>African Cities</h1>
        <ul className="list-group">
          {cities.map((city, index) =>
             <li
              key={index} 
              className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              onClick={() => setSelectedIndex(index)}
              >
                {city}
              </li>)}
        </ul>
      </>
    ) 
}

export default ListGroup