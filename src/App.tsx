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

  const handleSelectItem = (item:string) =>{
    console.log(item);
    
  }

  return (
    <div>
        <ListGroup items={countries} heading='Countries'onSelectItem={handleSelectItem}/>
        <ListGroup items={cities} heading='Cities'onSelectItem={handleSelectItem}/>
    </div>
  ) 
}

export default App