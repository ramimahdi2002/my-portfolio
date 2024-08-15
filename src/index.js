import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ensure 'root' element exists in your public/index.html file
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Ensure there's an element with id 'root' in your public/index.html.");
}

// Optional: Measure performance in your app, pass a function to log results (e.g., reportWebVitals(console.log))
reportWebVitals();
