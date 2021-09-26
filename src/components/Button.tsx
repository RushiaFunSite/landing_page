import React, { VFC } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: VFC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const baseButton = styles.storybook_button;
  const sizeMode =
    size === 'small'
      ? styles.storybook_button__small
      : size === 'medium'
      ? styles.storybook_button__medium
      : size === 'large'
      ? styles.storybook_button__large
      : '';
  return primary ? (
    <div>
      <button
        type="button"
        data-test-id={label}
        className={[styles.storybook_button__primary, `${baseButton}`, `${sizeMode}`].join(' ')}
        {...props}
      >
        {label}
      </button>
    </div>
  ) : (
    <button
      type="button"
      data-test-id={label}
      className={[styles.storybook_button__secondary, `${baseButton}`, `${sizeMode}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
