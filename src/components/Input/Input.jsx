import React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss';

export function CustomInput(
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
) {
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
      <div className={`${styles.content} ${isFilled && styles.filled} ${isFocus && styles.focus}`}>
        <input
          {...rest}
          ref={ref}
          className={styles.input}
          placeholder={label}
          onFocus={handleInputFocus}
          onBlur={(event) => handleInputBlur(event)}
        />
      </div>
    </div>
  );
}
