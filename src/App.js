import './App.css';
import { useState } from 'react';

function App() {
    const items = [
      {name : "Apple"},
      {name : "Apple1"},
      {name : "Apple2"},
      {name : "Apple3"},
      {name : "Apple4"}
    ]

    const [item,setItem] = useState("")
    const [message,setMessage] = useState("")

    function search(){
      let hasitem = items.find(ele=>String(item).toLowerCase===String(ele.name).toLowerCase);
      if(hasitem){
        setMessage(item + " found in list")
      }
      else{
        setMessage(item + " not found in list")
      }
    }
  

  return (
    <div className="App">
      <input type='text' value={item} onChange={(e)=>{setItem(e.target.value)}}/>
      <button onClick={search}>Search</button>
      <div>{message}</div>
    </div>
  );
}

export default App;