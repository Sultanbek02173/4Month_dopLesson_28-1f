import { useState } from "react"
import './App.css'

function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  return (
    <>
      <div>
        <input onChange={(e) => {setNum1(+e.target.value)}} type="text" />
        <input onChange={(e) => {setNum2(+e.target.value)}} type="text" />
      </div>

      <div>
        <button onClick={() => setResult(num1 + num2)}>+</button>
        <button onClick={() => setResult(num1 - num2)}>-</button>
        <button onClick={() => setResult(num1 * num2)}>*</button>
        <button onClick={() => setResult(num1 / num2)}>/</button>
        <button onClick={() => setResult(num1 ** num2)}>^</button>
      </div>
      <h1>Result:</h1>
      <h2>{result}</h2>
    </>
  )
}

export default App
