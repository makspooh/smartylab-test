import React, { useState } from "react";

import Input from "./components/shared/Input";

import styles from "./App.module.css";

function App() {
  const [inputs, setInputs] = useState({ isPalindrome: "" });

  const getIsPalindrome = () => {
    const { isPalindrome } = inputs;
    const reversed = isPalindrome.split("").reverse().join("");

    if (isPalindrome.length <= 1) {
      return "Type any text";
    }

    if (isPalindrome === reversed) {
      return "String is a palindrome!";
    }

    return "String is not palindrome!";
  };

  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({ ...prev, [valueKey]: value.trim() }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Task #1: Is palindrome?</p>

          <p className={styles.description}>
            Just type text below and find out!
          </p>

          <Input
            value={inputs.isPalindrome}
            valueKey="isPalindrome"
            label="String"
            placeholder="Type any text"
            className={styles.input}
            onChange={handleInputChange}
          />

          <p className={styles.result}>{getIsPalindrome()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
