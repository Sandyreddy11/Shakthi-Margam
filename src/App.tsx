import React from 'react';
// Global styles have been moved to src/main.tsx
import AppLayout from './layouts/AppLayout/AppLayout';
import HomePage from './pages/HomePage/HomePage'; // Example page

// This App component can be expanded with routing in the future.
// For now, it just renders the AppLayout with a default page (e.g., HomePage).
const App: React.FC = () => {
  return (
    <AppLayout>
      <HomePage /> 
      {/* In a real app, this would be replaced by a router outlet like <Outlet /> from react-router-dom */}
    </AppLayout>
  );
};

export default App;
