import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

const Button = ({ label, className, isDisabled, onClick }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <button className={styles.button} disabled={isDisabled} onClick={onClick}>
        {label}
      </button>

      <div className={styles.background} />
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  className: "",
  isDisabled: false,
  onClick: () => {},
};

export default Button;
