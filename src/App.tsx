import ListGroup from "./components/ListGroup";

function App(){
   const cities = [
    'Accra',
    'Pretoria',
    'Dodoma',
    'Mombasa',
    'Tripoli',
    'Lagos',
  ]

  return <div><ListGroup items={cities} heading='Cities' /></div>
}

export default App