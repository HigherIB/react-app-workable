
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
        <ul className="list-group">
          {cities.map((city) => <li className="list-group-item">{city}</li>)}
          
        </ul>
      </>
    ) 
}

export default ListGroup