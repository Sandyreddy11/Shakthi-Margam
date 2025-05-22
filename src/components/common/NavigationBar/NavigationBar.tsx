import React from 'react';
// import styles from './NavigationBar.module.css';

interface NavigationBarProps {
  // Props for navigation items, user info, etc. can be added later
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <nav className="navigation-bar"> {/* Replace with CSS module later */}
      {/* Placeholder for navigation links */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/assistant">Assistant</a></li>
        {/* More links can be added here */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
