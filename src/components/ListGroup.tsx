
function ListGroup() {
  const cities = [
    'Accra',
    'Pretoria',
    'Dodoma',
    'Mombasa',
    'Tripoli',
    'Lagos',
  ]
    return (
      <>
        <h1>African Cities</h1>
        <ul className="list-group --bs-secondary-bg">
          {cities.map((city, index) =>
             <li
              key={index} 
              className="list-group-item"
              onClick={() => console.log(city)}
              >
                {city}
              </li>)}
        </ul>
      </>
    ) 
}

export default ListGroup