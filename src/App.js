import React from "react";

import BlockLayout from "./components/layouts/BlockLayout";
import PalindromeChecker from "./components/blocks/PalindromeChecker";
import MatrixRotator from "./components/blocks/MatrixRotator";
import Calculator from "./components/blocks/Calculator";
import BracketsChecker from "./components/blocks/BracketsChecker";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <BlockLayout>
        <PalindromeChecker />
      </BlockLayout>

      <BlockLayout>
        <MatrixRotator />
      </BlockLayout>

      <BlockLayout>
        <Calculator />
      </BlockLayout>

      <BlockLayout>
        <BracketsChecker />
      </BlockLayout>
    </div>
  );
}

export default App;
