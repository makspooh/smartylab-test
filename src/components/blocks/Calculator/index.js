import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Input from "../../shared/Input";

import styles from "./index.module.css";
import { KEYBOARD } from "../../../utils/constants/calculator";

const PalindromeChecker = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState({ first: "", second: "" });
  const [operator, setOperator] = useState("");

  const handleEqualsClick = () => {
    if (numbers.first && numbers.second) {
      const num1 = parseFloat(numbers.first);
      const num2 = parseFloat(numbers.second);

      let result = "";

      switch (operator) {
        case "+": {
          result = num1 + num2;
          break;
        }

        case "-": {
          result = num1 - num2;
          break;
        }

        case "*": {
          result = num1 * num2;
          break;
        }

        case "/": {
          result = num1 / num2;
          break;
        }

        default: {
          break;
        }
      }

      setOperator("");
      setNumbers({ first: result.toString(), second: "" });
    }
  };

  const handleNumberClick = (number) => {
    let { first, second } = { ...numbers };

    switch (true) {
      case !!second && !!operator: {
        second = `${second}${number}`;
        break;
      }

      case !!first && !!operator: {
        second = number;
        break;
      }

      case !!first && !operator: {
        first = `${first}${number}`;
        break;
      }

      case !first: {
        first = number;
        break;
      }

      default: {
        break;
      }
    }

    setNumbers({ first, second });
  };

  const handleOperatorClick = (operator) => {
    let { first, second } = { ...numbers };

    if (!!first && !!second) {
      handleEqualsClick();
    }

    setOperator(operator);
  };

  const handleClearClick = () => {
    setInput("");
    setOperator("");
    setNumbers({ first: "", second: "" });
  };

  const handleDeleteClick = () => {
    const { first, second } = { ...numbers };

    switch (true) {
      case !!second && !!operator: {
        setNumbers({ first, second: second.slice(0, -1) });
        break;
      }

      case !!first && !!operator: {
        setOperator("");
        break;
      }

      case !!first && !operator: {
        setNumbers({ first: first.slice(0, -1), second });
        break;
      }

      default: {
        break;
      }
    }
  };

  const handleButtonClick = (type, value) => {
    switch (type) {
      case "number": {
        handleNumberClick(value);
        break;
      }

      case "operator": {
        handleOperatorClick(value);
        break;
      }

      case "del": {
        handleDeleteClick();
        break;
      }

      case "clear": {
        handleClearClick();
        break;
      }

      default: {
        handleEqualsClick();
        break;
      }
    }
  };

  useEffect(
    () => setInput(`${numbers.first}${operator}${numbers.second}`),
    [numbers, operator]
  );

  return (
    <>
      <p className={styles.title}>Task #3: Calculator</p>

      <div className={styles.container}>
        <Input value={input} readOnly />

        <div className={styles.keyboard}>
          {KEYBOARD.map((key) => {
            const { label, className, type } = key;

            return (
              <div
                key={label}
                className={classNames(styles.keyContainer, styles[className])}
                onClick={() => handleButtonClick(type, label)}
              >
                <div className={styles.key}>
                  <p className={styles.keyText}>{label}</p>
                </div>

                <div className={styles.background} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PalindromeChecker;
