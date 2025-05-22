import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string; // Allow for additional custom classNames
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  fullWidth = false,
  className = '',
}) => {
  const classNames = [
    styles.button,
    styles[variant], // e.g., styles.primary
    styles[size],    // e.g., styles.medium
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className,       // For any custom classes passed in
  ].filter(Boolean).join(' ').trim(); // filter(Boolean) removes any empty strings

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
