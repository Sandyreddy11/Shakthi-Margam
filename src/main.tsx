// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App.tsx is the main app component
// Global styles moved here from App.tsx (if they were there)
import './styles/brand-styles.css'; 
import './styles/global.css';    

async function enableMocking() {
  // Check if a specific environment variable is set to enable mocks.
  // For Vite, it's import.meta.env.VITE_ENABLE_MOCKS.
  // For Create React App, it's process.env.REACT_APP_ENABLE_MOCKS.
  // Defaulting to true for development if no specific var is found.
  const shouldMock = process.env.NODE_ENV === 'development'; // Basic check

  if (shouldMock) {
    // Dynamically import the MSW worker setup.
    // Ensure the path to 'src/mocks/browser' is correct.
    const { worker } = await import('./mocks/browser'); 
    
    // Start the worker.
    // It's important that this promise resolves before the app is rendered.
    // The `onUnhandledRequest: 'bypass'` option ensures that requests
    // not handled by MSW are passed through as normal network requests.
    try {
      await worker.start({
        onUnhandledRequest: 'bypass',
        // Optional: quiet mode to suppress console logs from MSW
        // quiet: true, 
      });
      console.log('MSW worker started.');
    } catch (error) {
      console.error('Failed to start MSW worker:', error);
      // Decide if you want to proceed without mocks or show an error.
    }
  }
}

// Call enableMocking and then render the app.
enableMocking().then(() => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element with ID 'root'.");
  }
}).catch(error => {
  console.error("An error occurred during mock setup or app rendering:", error);
  // Fallback rendering or error display if necessary
  const rootElement = document.getElementById('root');
    if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <div>Error during startup. Check console.</div>
      </React.StrictMode>
    );
  }
});
