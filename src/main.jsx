import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'

// Performance monitoring
const reportWebVitals = (metric) => {
  // Analytics or custom reporting
  console.log(metric);
  
  // Could send to analytics service
  // if (metric.name === 'FCP') {
  //   sendToAnalytics('FCP', Math.round(metric.value));
  // }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

// Optional: Measure and report web vitals
// import { onCLS, onFID, onLCP } from 'web-vitals';
// onCLS(reportWebVitals);
// onFID(reportWebVitals);
// onLCP(reportWebVitals);
