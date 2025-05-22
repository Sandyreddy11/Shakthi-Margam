import React from 'react';
// import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type = 'text', placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-field" // Replace with CSS module later
    />
  );
};

export default Input;
