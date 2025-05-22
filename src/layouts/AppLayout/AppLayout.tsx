// src/layouts/AppLayout/AppLayout.tsx
import React from 'react';
import styles from './AppLayout.module.css';
import Header from '../../components/common/Header/Header';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';

interface AppLayoutProps {
  children: React.ReactNode;
}

// Example navigation items - these can be moved to a config file or fetched later
const defaultNavItems = [
  { label: 'Home', path: '/' },
  { label: 'AI Assistant', path: '/assistant' },
  { label: 'Dashboard', path: '/dashboard' }, // Example
  { label: 'Admin', path: '/admin' },       // Example
];

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <Header siteTitle="Shakti Margam" />
      <NavigationBar navItems={defaultNavItems} />
      <main className={styles.mainContent}>
        {children}
      </main>
      {/* Optional: Footer component could be added here later */}
      {/* <footer className={styles.appFooter}>© 2024 Shakti Margam</footer> */}
    </div>
  );
};

export default AppLayout;
