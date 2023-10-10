import React, { useState } from "react";

import styles from "./index.module.css";
import Input from "../../shared/Input";

const PalindromeChecker = () => {
  const [inputs, setInputs] = useState({ isPalindrome: "" });

  const getIsPalindrome = () => {
    const str = inputs.isPalindrome.toLowerCase().replace(/\s/g, "");
    const reversed = str.split("").reverse().join("");

    if (str.length <= 1 || str !== reversed) {
      return "String is not palindrome!";
    }

    return "String is a palindrome!";
  };

  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({ ...prev, [valueKey]: value }));
  };

  return (
    <>
      <p className={styles.title}>Task #1: Is palindrome?</p>

      <Input
        value={inputs.isPalindrome}
        valueKey="isPalindrome"
        label="String"
        placeholder="Type any text"
        className={styles.input}
        onChange={handleInputChange}
      />

      <p className={styles.result}>{getIsPalindrome()}</p>
    </>
  );
};

export default PalindromeChecker;
