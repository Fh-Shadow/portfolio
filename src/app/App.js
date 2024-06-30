import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/theme.css'; // Importando o tema CSS
import useTitle from '../hooks/useTitle';

function App() {
  const [appName, setAppName] = useState('Site');

  useTitle(appName);

  useEffect(() => {
    // Buscar o short_name do manifest.json
    fetch('/manifest.json')
      .then(response => response.json())
      .then(data => setAppName(data.short_name || 'Site'))
      .catch(error => console.error('Error fetching manifest:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header" style={{ color: 'var(--text)' , background: 'var(--background)' }}>
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