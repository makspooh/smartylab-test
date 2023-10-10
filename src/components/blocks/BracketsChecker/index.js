import React, { useState } from "react";

import styles from "./index.module.css";
import Input from "../../shared/Input";

const BracketsChecker = () => {
  const [inputs, setInputs] = useState({ isPaired: "" });

  const getIsPaired = () => {
    let outputMessage = "";
    const stack = [];
    const bracketPairs = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    for (let i = 0; i < inputs.isPaired.length; i++) {
      const char = inputs.isPaired[i];

      if (bracketPairs[char]) {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        const lastBracket = stack.pop();

        if (bracketPairs[lastBracket] !== char) {
          return "Brackets not paired!";
        }
      }
    }

    outputMessage =
      stack.length === 0 ? "Brackets paired!" : "Brackets not paired!";

    return outputMessage;
  };

  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({ ...prev, [valueKey]: value }));
  };

  return (
    <>
      <p className={styles.title}>Task #4: Brackets pairing</p>

      <Input
        value={inputs.isPaired}
        valueKey="isPaired"
        label="String"
        placeholder="Type any text"
        className={styles.input}
        onChange={handleInputChange}
      />

      <p className={styles.result}>{getIsPaired()}</p>
    </>
  );
};

export default BracketsChecker;
