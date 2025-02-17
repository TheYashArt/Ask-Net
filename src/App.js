import './App.css';
import { useState } from 'react';

function App() {
  // const [greet, setGreet] = useState("")
  const [input_value,setInput_value] = useState("")
  const [fact,setFact] = useState("0")

  function factorial(){
    let fact_local = 1
    for(let i=1;i<=input_value;i++){
      fact_local*=i
    }
    setFact(fact_local)
  }

  return (
    <div className="App">
      <input value={input_value} type='number' onChange={(e)=>{
        setInput_value(e.target.value)
        setFact("0")
      }}/>
      <button onClick={factorial}>Click here to calculate</button>
      <input type='reset' onClick={(e)=>{
        setFact("0")
        setInput_value("")
      }}/>
      {fact!=0 && (<div>factorial of {input_value}: {fact}</div>)}
    </div>
  );
}

export default App;