import React, { useState, useEffect } from 'react';

/* Styles */
import '../styles/App.css';
import '../styles/theme.css';

/* Hooks */
import useTitle from '../hooks/useTitle';
import useFavicon from '../hooks/useFavicon'; 

function App() {
  /* Use Hooks */
  const [appName, setAppName] = useState('Site');

  useTitle(appName);
  useFavicon('%PUBLIC_URL%/../assets/favicon.svg');

  useEffect(() => {
    fetch('/manifest.json')
      .then(response => response.json())
      .then(data => setAppName(data.short_name || 'My Portfolio'))
      .catch(error => console.error('Error fetching manifest:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header" style={{ color: 'var(--theme-text)' , background: 'var(--theme-background)' }}>
        <p>
          Edit <code>src/app/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
