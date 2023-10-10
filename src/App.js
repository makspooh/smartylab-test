import React from "react";

import BlockLayout from "./components/layouts/BlockLayout";
import PalindromeChecker from "./components/blocks/PalindromeChecker";
import MatrixRotator from "./components/blocks/MatrixRotator";

import styles from "./App.module.css";
import Calculator from "./components/blocks/Calculator";

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
    </div>
  );
}

export default App;
