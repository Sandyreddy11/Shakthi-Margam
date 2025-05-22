// src/components/common/NavigationBar/NavigationBar.tsx
import React from 'react';
import styles from './NavigationBar.module.css';

interface NavItem {
  label: string;
  path: string;
  // icon?: React.ReactElement; // Optional icon
}

interface NavigationBarProps {
  navItems: NavItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ navItems }) => {
  return (
    <nav className={styles.navigationBar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            {/* In a real app with react-router-dom, this would be <Link to={item.path}> */}
            <a href={item.path} className={styles.navLink}>
              {/* {item.icon && <span className={styles.navIcon}>{item.icon}</span>} */}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
