import { useState } from 'react';

function InputComponent({ setInputValue }) {
  return (
    <input
      type="number"
      placeholder="Enter Amount"
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

function SelectCurrency({ value, setCurrency }) {
  return (
    <select value={value} onChange={(e) => setCurrency(e.target.value)}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="inr">INR</option>
      <option value="gbp">GBP</option>
    </select>
  );
}

function DisplayComponent({ text }) {
  return <h2>{text}</h2>;
}

function App() {
  const apiKey = "YOUR_API_KEY_HERE";
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("gbp");
  const [toCurrency, setToCurrency] = useState("usd");
  const [result, setResult] = useState("");

  async function fetchConversion() {
  if (!amount) return;

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`
    );

    const data = await response.json();

    setResult(data.conversion_result ?? "No result");
  } catch (err) {
    setResult("Error fetching data: " + err.message);
  }
}

  return (
    <>
      <InputComponent setInputValue={setAmount} />

      <SelectCurrency value={fromCurrency} setCurrency={setFromCurrency} />
      <SelectCurrency value={toCurrency} setCurrency={setToCurrency} />

      <br /><br />

      <button onClick={fetchConversion}>Convert</button>

      <DisplayComponent text={result} />
    </>
  );
}

export default App;

