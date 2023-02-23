import React,{useState} from 'react';
import './App.css';
import Newproduct from './components/Newproduct';
import LatestProduct from './components/LatestProduct/LatestProduct'

const DummyProduct = [
  {Name :'Beginner to Advanced',Type : 'Book',Price:1890},
  {Name: 'Rework', Type: 'Book', Price: 595},
  {Name: 'iPhone 12 Mini', Type: 'Electronics', Price: 69990},
  {Name: 'Teapoy', Type: 'Furniture', Price: 6000},
  {Name:  'Yoga Mat', Type:'Fitness',Price : 1200},
]
function App() {

  
  const [Product,setProduct] = useState(DummyProduct);

  function newDisplay(Update){
    console.log('App Component');
    setProduct([...Product,Update]);
  }

  return (
    
        <div>
          <h1>App Component</h1>
          <LatestProduct UpdateData = {newDisplay} />
          <Newproduct Product = {Product} />
   

        </div>
        
    
  );
}

export default App;
