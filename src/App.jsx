import React,{useState} from "react";
function App(){
const[p,setP]=useState(0);
const[t,setT]=useState(0);
const[r,setR]=useState(0);
const[result,setResult]=useState(0);
 return (
    <div>
      <h1>Simple Interest Calculator</h1>
      <h2>Principal:</h2>
      <input type="number" placeholder="Enter Principal Value" onChange={e => setP(e.target.value)} />
      <h2>Rate:</h2>
      <input type="number" placeholder="Enter Rate Value" onChange={e => setR(e.target.value)} />
      <h2>Time:</h2>
      <input type="number" placeholder="Enter Time Value" onChange={e => setT(e.target.value)} />
      <br></br>
      <button onClick={()=>setResult((p*t*r) / 100)}>
        Calculate
      </button>
      <h2>Simple Interest:{result}</h2>
    </div>
  );
}
export default App;
