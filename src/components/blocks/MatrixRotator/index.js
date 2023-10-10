import React, { useState } from "react";

import {
  formatJson,
  isJson,
  isMatrix,
  rotateMatrix,
} from "../../../utils/helpers";

import Button from "../../shared/Button";
import TextArea from "../../shared/TextArea";

import styles from "./index.module.css";

const MatrixRotator = () => {
  const [inputs, setInputs] = useState({
    jsonData: "",
    formattedJson: "",
  });

  const updateMatrix = (isJson, matrix) => {
    if (!isJson) {
      setInputs((prev) => ({ ...prev, formattedJson: "" }));

      return;
    }

    const isMatrixValid = isMatrix(JSON.parse(matrix));

    if (!isMatrixValid) {
      setInputs((prev) => ({ ...prev, formattedJson: "Matrix not valid" }));

      return;
    }

    setInputs((prev) => ({ ...prev, formattedJson: matrix }));
  };

  const handleInputChange = (value, valueKey) => {
    const { isValid, formatted } = formatJson(value);

    setInputs((prev) => ({ ...prev, [valueKey]: formatted }));

    updateMatrix(isValid, formatted);
  };

  const handleRotateMatrix = (direction) => {
    const rotatedMatrix = rotateMatrix(
      JSON.parse(inputs.formattedJson),
      direction
    );

    const jsonMatrix = JSON.stringify(rotatedMatrix);
    const { formatted: formattedJson } = formatJson(jsonMatrix);

    setInputs((prev) => ({
      ...prev,
      formattedJson,
    }));
  };

  return (
    <>
      <p className={styles.title}>Task #2: Rotate matrix</p>

      <TextArea
        value={inputs.jsonData}
        valueKey="jsonData"
        label="JSON"
        placeholder="Type a valid JSON"
        className={styles.input}
        onChange={handleInputChange}
      />

      <div className={styles.buttons}>
        <Button
          label="Rotate left"
          isDisabled={!isJson(inputs.formattedJson)}
          onClick={() => handleRotateMatrix("left")}
        />

        <Button
          label="Rotate right"
          isDisabled={!isJson(inputs.formattedJson)}
          onClick={() => handleRotateMatrix("right")}
        />
      </div>

      <div className={styles.results}>
        <div className={styles.jsonWrapper}>
          <p className={styles.resultTitle}>Input</p>

          <pre className={styles.result}>
            {inputs.jsonData || "Type JSON above"}
          </pre>
        </div>

        <div className={styles.jsonWrapper}>
          <p className={styles.resultTitle}>Rotated</p>

          <pre className={styles.result}>
            {inputs.formattedJson || "Type JSON above"}
          </pre>
        </div>
      </div>
    </>
  );
};

export default MatrixRotator;
