import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.FUNDY_BACKEND_BASIC_URL || 'http://localhost:5001/';
    axios.get(apiUrl)
    .then(response => setIsConnected(response.data.connected))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <header className="App-header">

        <h1 className='text-2xl font-bold mb-4'>Initiation of Fundy App</h1>
        <h2 className='text-xl font-semibold'>Is MongoDB connected</h2>
        
        <p>
          {isConnected ? 'Yes': 'No'}
        </p>
      </header>
    </div>
  );
}

export default App;
