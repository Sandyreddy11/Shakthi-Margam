import React from 'react';
// import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="app-header"> {/* Replace with CSS module later */}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
