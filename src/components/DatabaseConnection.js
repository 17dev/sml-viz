import React, { useState } from 'react';
import { connectDatabase } from '../utils/database';

const DatabaseConnection = () => {
  const [selectedDatabases, setSelectedDatabases] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleDatabaseSelection = (event) => {
    setSelectedDatabases(Array.from(event.target.selectedOptions, option => option.value));
  };

  const handleConnect = async () => {
    try {
      await Promise.all(selectedDatabases.map(database => connectDatabase(database)));
      setConnectionStatus('connectionSuccess');
    } catch (error) {
      setConnectionStatus('connectionFailure');
    }
  };

  return (
    <div id="database-connection">
      <h2>Database Connection</h2>
      <select multiple={true} onChange={handleDatabaseSelection}>
        <option value="mysql">MySQL</option>
        <option value="postgres">PostgreSQL</option>
      </select>
      <button onClick={handleConnect}>Connect</button>
      <p>{connectionStatus}</p>
    </div>
  );
};

export default DatabaseConnection;