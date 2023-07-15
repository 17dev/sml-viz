import React, { useState } from 'react';
import { connectDatabase } from '../utils/database';

const DatabaseSettings = () => {
  const [dbType, setDbType] = useState('');
  const [tableName, setTableName] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleDbTypeChange = (event) => {
    setDbType(event.target.value);
  };

  const handleTableNameChange = (event) => {
    setTableName(event.target.value);
  };

  const handleConnect = async () => {
    try {
      await connectDatabase(dbType, tableName);
      setConnectionStatus('connectionSuccess');
    } catch (error) {
      setConnectionStatus('connectionFailure');
    }
  };

  return (
    <div id="database-settings">
      <h2>Database Settings</h2>
      <label>
        Database Type:
        <select value={dbType} onChange={handleDbTypeChange}>
          <option value="">Select...</option>
          <option value="mysql">MySQL</option>
          <option value="postgres">PostgreSQL</option>
        </select>
      </label>
      <label>
        Table Name:
        <input type="text" value={tableName} onChange={handleTableNameChange} />
      </label>
      <button onClick={handleConnect}>Connect</button>
      <p>{connectionStatus}</p>
    </div>
  );
};

export default DatabaseSettings;