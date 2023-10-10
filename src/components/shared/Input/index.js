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
  onChange,
}) => {
  const id = nanoid();

  const handleChange = ({ target: { value } }) => {
    onChange(value, valueKey);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input
        id={id}
        className={styles.field}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  valueKey: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  valueKey: "",
  label: "",
  placeholder: "",
  className: "",
  onChange: () => {},
};

export default Input;
