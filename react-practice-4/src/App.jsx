import { useState } from "react";

function Box({ number, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const boxStyle = {
    background: isOpen ? "#c2f0c2" : "white",  // light green when open
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    flexDirection: "column"
  };

  return (
    <div style={boxStyle}>
      <h3>Box {number}</h3>

      {/* Change displayed text */}
      <p>{isOpen ? answer : question}</p>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
    </div>
  );
}

function App() {
  const [boxes] = useState([1, 2, 3]);
  const [questions] = useState([
    "What is React?",
    "Explain useState hook.",
    "What are props in React?"
  ]);

  const [answers] = useState([
    "React is a JavaScript library for building UIs.",
    "useState is a hook that lets components handle local state.",
    "Props are inputs that are passed from parent to child components."
  ]);

  const appStyle = {
    display: "flex",
    gap: "20px",
    padding: "20px"
  };

  return (
    <div style={appStyle}>
      {boxes.map((boxNumber, index) => (
        <Box
          key={boxNumber}
          number={boxNumber}
          question={questions[index]}
          answer={answers[index]}
        />
      ))}
    </div>
  );
}

export default App;
