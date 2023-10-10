import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

const Button = ({ label, className, onClick }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>

      <div className={styles.background} />
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  className: "",
  onClick: () => {},
};

export default Button;
