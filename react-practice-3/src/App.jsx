import { useState } from "react";
import Block from "./block";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const blocks = ["A", "B", "C", "D"];
  const answers = ["a","b","c","d"];

  const handleBlockClick = (index) => {
    setSelectedAnswer(selectedAnswer === index ? null : index);
  };

  return (
    <div style={{ display: "flex" }}>
      {blocks.map((item, index) => (
        <Block 
          key={index} 
          title={item}
          answer={answers[index]}
          isSelected={selectedAnswer === index}
          onClick={() => handleBlockClick(index)}
        />
      ))}
    </div>
  );
}
export default App;