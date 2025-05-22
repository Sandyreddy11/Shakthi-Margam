// src/components/common/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
// import Button from '../Button/Button'; // Example for a login button

interface HeaderProps {
  siteTitle: string;
  // onLoginClick?: () => void; // Example
  // user?: { name: string }; // Example
}

const Header: React.FC<HeaderProps> = ({ siteTitle /*, user, onLoginClick */ }) => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.logoContainer}>
        {/* Placeholder for a logo image if available */}
        {/* <img src="/path-to-logo.png" alt={siteTitle} className={styles.logo} /> */}
        <span className={styles.siteTitle}>{siteTitle}</span>
      </div>
      <div className={styles.navAuthSection}>
        {/* Placeholder for future navigation or auth elements */}
        {/* For now, a static example or could be dynamic based on user prop */}
        {/* {user ? (
          <span className={styles.userName}>Welcome, {user.name}</span>
        ) : (
          <Button onClick={onLoginClick} variant="outline" size="small">
            Login
          </Button>
        )} */}
        <a href="/login" className={styles.authLink}>Login</a> {/* Simple link for now */}
      </div>
    </header>
  );
};

export default Header;
