import React, { useState } from "react";
import Button from "../../shared/Button";

import TextArea from "../../shared/TextArea";

import styles from "./index.module.css";

const MatrixRotator = () => {
  const [inputs, setInputs] = useState({ matrix: "" });

  const handleInputChange = (value, valueKey) => {
    setInputs((prev) => ({ ...prev, [valueKey]: value }));
  };

  return (
    <>
      <p className={styles.title}>Task #2: Rotate matrix</p>

      <p className={styles.description}>Type valid JSON below and rotate!</p>

      <TextArea
        value={inputs.matrix}
        valueKey="matrix"
        label="JSON"
        placeholder="Type a valid JSON"
        className={styles.input}
        onChange={handleInputChange}
      />

      <div className={styles.buttons}>
        <Button label="Rotate left" />

        <Button label="Rotate right" />
      </div>
    </>
  );
};

export default MatrixRotator;
