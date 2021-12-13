import React from 'react';
import ReactDOM from 'react-dom';
import GA4React from 'ga-4-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import worker from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const ga4react = new GA4React('G-D64TDBEBXV');

(async () => {
  await ga4react.initialize();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
