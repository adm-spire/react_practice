import React, { useState } from "react";

function InputComponent({ value, setText }){
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type Bill Amount"
    />
  )
}

function SelectComponent({ value, setSelectedValue }) {
  return (
    <select value={value} onChange={(e) => setSelectedValue(e.target.value)}>
      <option value="0">-- Select an option --</option>
      <option value="0">Disatisfied (0%)</option>
      <option value="5">Satisfied (5%)</option>
      <option value="10">Very Good (10%)</option>
    </select>
  );
}

function DisplayComponent({ text, value1 , value2}) {
  const amount = parseFloat(text) || 0;
  const p1 = parseFloat(value1) || 0;
  const p2 = parseFloat(value2) || 0;

  if (amount === 0) return <h2></h2>;

  const tip1 = (p1 / 100) * amount;
  const tip2 = (p2 / 100) * amount;
  const total = amount + tip1 + tip2;

  return (
    <h2>
      {`Bill: $${amount.toFixed(2)}  Tip1: $${tip1.toFixed(2)}  Tip2: $${tip2.toFixed(2)}  Total: $${total.toFixed(2)}`}
    </h2>
  );
}

function App() {
   const [text, setText] = useState("");
   const [selectedValue1, setSelectedValue1] = useState("0");
   const [selectedValue2, setSelectedValue2] = useState("0");  

   const resetAll = () => {
     setText("");
     setSelectedValue1("0");
     setSelectedValue2("0");
   }

  return (
    <>
      <div>
        <p> How much was the bill ? <InputComponent value={text} setText={setText} /> </p>
        <p>How did you like the service ? <SelectComponent value={selectedValue1} setSelectedValue={setSelectedValue1} /></p>
        <p>How did your friend like the service ? <SelectComponent value={selectedValue2} setSelectedValue={setSelectedValue2} /></p>
        <DisplayComponent text={text} value1={selectedValue1} value2={selectedValue2} />
        <div style={{ marginTop: 16 }}>
          <button onClick={resetAll}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
