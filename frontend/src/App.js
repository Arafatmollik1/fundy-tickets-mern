import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5001/')
    .then(response => setIsConnected(response.data.connected))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <h1>Initiation of Fundy App</h1>
        <h2>Is MongoDB connected</h2>
        
        <p>
          {isConnected ? 'Yes': 'No'}
        </p>
      </header>
    </div>
  );
}

export default App;
