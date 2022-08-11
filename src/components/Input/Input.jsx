import React, { forwardRef } from 'react';
import { useState } from 'react';
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './styles.module.scss';

const InputBase = (
  {
    label,
    Icon,
    error,
    isPassword = false,
    isShowingPassword = false,
    showPassword,
    ...rest
  },
  ref
) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  function handleInputFocus() {
    setIsFocus(true);
  }

  function handleInputBlur(event) {
    setIsFocus(false);
    setIsFilled(!!event.target.value);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>Email</label>
      <div
        className={`${styles.content} ${isFilled && styles.filled} ${
          isFocus && styles.focus
        } ${error && styles.errorInput}`}
      >
        {Icon && <Icon size={24} />}
        <input
          {...rest}
          ref={ref}
          className={styles.input}
          placeholder={label}
          onFocus={handleInputFocus}
          onBlur={(event) => handleInputBlur(event)}
        />

        {isPassword && (!isShowingPassword ? <FiEye size={24} onClick={showPassword} /> : (<FiEyeOff size={24} onClick={showPassword} />) )}
      </div>

      {error && (
        <div className={styles.error}>
          <FiAlertCircle />
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export const CustomInput = forwardRef(InputBase);
