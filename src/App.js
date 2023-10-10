import React from "react";

import BlockLayout from "./components/layouts/BlockLayout";
import PalindromeChecker from "./components/blocks/PalindromeChecker";
import MatrixRotator from "./components/blocks/PalindromeChecker/MatrixRotator";

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
    </div>
  );
}

export default App;
