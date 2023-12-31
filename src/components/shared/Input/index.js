import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import classNames from "classnames";

import styles from "./index.module.css";

const Input = ({
  value,
  valueKey,
  label,
  placeholder,
  className,
  readOnly,
  onChange,
}) => {
  const id = nanoid();

  const handleChange = ({ target: { value } }) => {
    onChange(value, valueKey);
  };

  return (
    <div className={classNames(styles.container, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.fieldWrapper}>
        <input
          id={id}
          className={styles.field}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={handleChange}
        />

        <div className={styles.background} />
      </div>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  valueKey: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  valueKey: "",
  label: "",
  placeholder: "",
  className: "",
  readOnly: false,
  onChange: () => {},
};

export default Input;
