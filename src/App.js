import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [sample, setSample] = useState([]);
  
    useEffect( () => {
      axios.get("https://reqres.in/api/users?page=2")
      .then(res => {
        console.log(res.data.data);
        setSample(res.data.data);
      })
    },[])

  return (
    <div>
      <h1>User List</h1>
      {sample.map( (sample,index)=>
        <p key={index}>{sample.id}</p>)
      }
    </div>
  );
};

export default App;