import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
 

  const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
      <>
        <h1>{heading}</h1>
        <ul className="list-group">
          {items.map((city, index) =>
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