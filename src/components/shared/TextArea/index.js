import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import classNames from "classnames";

import styles from "./index.module.css";

const TextArea = ({
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

      <div className={styles.fieldWrapper}>
        <textarea
          id={id}
          className={styles.field}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />

        <div className={styles.background} />
      </div>
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  valueKey: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  valueKey: "",
  label: "",
  placeholder: "",
  className: "",
  onChange: () => {},
};

export default TextArea;
