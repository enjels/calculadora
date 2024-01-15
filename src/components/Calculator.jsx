
import "./Calculator.css";
import { useState } from "react";

export const Calculator = () => {
    const keypadNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
    const operations = ["+", "-", "*", "/"]

  return (
    <div className="calculator">
      <div className="complete-operation">3+3 = 6</div>
      <div className="display">6</div>
          <div className="buttons"></div>
          <button>AC</button>
          {keypadNumbers.map((num) => (
              <button key={num}>{num}</button>
          ))}
          {operations.map((operation) => (
              <button key={operation}>{operation}</button>
          ))}
      <button>=</button>
    </div>
  );
};
