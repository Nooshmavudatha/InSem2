
import React, { useState } from 'react';
function App() {
const [count, setCount] = useState(0);
const [a, setA] = useState(0);
const [b, setB] = useState(0);
const [result, setResult] = useState(0);
return (
<div>
<h1>Counter</h1>
<h2>{count}</h2>
<button onClick={() => setCount(count + 1)}>Increment</button>
{' '}
<button onClick={() => setCount(count - 1)}>Decrement</button>
{' '}
<button onClick={() => setCount(0)}>Reset</button>
<hr />
<h1>Calculator</h1>
<input type="number" onChange={(e) => setA(Number(e.target.value))} placeholder="First number" />
{' '}
<input type="number" onChange={(e) => setB(Number(e.target.value))} placeholder="Second number" />
<br /><br />
<button onClick={() => setResult(a + b)}>Addition</button>
{' '}
<button onClick={() => setResult(a - b)}>Subtraction</button>
{' '}
<button onClick={() => setResult(a * b)}>Multiply</button>
{' '}
<button onClick={() => setResult(b !== 0 ? a / b : "Cannot divide by zero")}>Divide</button>
<h2>Result: {result}</h2>
</div>
);
}
export default App;
