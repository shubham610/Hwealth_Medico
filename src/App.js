
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const App=()=> {
  const [data, setdata] = useState('')
useEffect(() => {
const fetchData= async () => {
  const data=await axios.get('http://localhost:3030/data');
  setdata(data.data);
};
fetchData();

},[])
if(!data) {console.log("Loading");return <div>Loading ....</div>;}
console.log(data[0]);

  return (
    <div className='flex flex-col'>
      {data.map((e,i)=>{
        return <ProductCard data={e} key={i}/>
      })}
      
   </div>
  );
}

export default App;
