import React from 'react';
// import Header from '../../components/common/Header/Header'; // Example import
// import NavigationBar from '../../components/common/NavigationBar/NavigationBar'; // Example import
// import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout"> {/* Replace with CSS module later */}
      {/* <Header title="Shakti Margam" /> */} {/* Example usage */}
      {/* <NavigationBar /> */} {/* Example usage */}
      <main className="main-content">
        {children}
      </main>
      <footer className="app-footer"> {/* Replace with CSS module later */}
        <p>&copy; {new Date().getFullYear()} Shakti Margam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AppLayout;
