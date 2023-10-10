import React from "react";

import styles from "./index.module.css";

const BlockLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BlockLayout;
