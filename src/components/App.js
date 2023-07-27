import React,{useState,useEffect} from 'react';
import '../style.css';

function App() {
  const [results,setResults] = useState([]);
  const valueData=[];
  useEffect(()=>{
   fetch("https://my-json-server.typicode.com/skullbreakerr/e-comerce-API/categories").then(response => response.json()).then(data=>{
     console.log(data);
     setResults(data);
     valueData=results.map(data=>(
      <div>{d.title}</div>
    ))
   })
  },[])

  return (
      <div className="App">
      {
        results.map(data=>(
          <div key={d.id}>{data.title}</div>
        ))
      }
      </div>
  )
};

export default App;
