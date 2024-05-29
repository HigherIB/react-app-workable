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

  const countries = [
    'Ghana',
    'South Africa',
    'Tanzania',
    'Kenya',
    'Libya',
    'Nigeria',
  ]

  return (
    <div>
        <ListGroup items={countries} heading='Countries' />
        <ListGroup items={cities} heading='Cities' />
    </div>
  ) 
}

export default App