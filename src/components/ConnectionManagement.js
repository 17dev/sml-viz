import React, { useState, useEffect } from 'react';
import { editConnection, deleteConnection } from '../utils/database';
import Modal from './Modal';

const ConnectionManagement = () => {
  const [connections, setConnections] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch connections from local storage or API
    const fetchedConnections = []; // Replace with actual fetch
    setConnections(fetchedConnections);
  }, []);

  const handleEdit = (connection) => {
    setSelectedConnection(connection);
    setShowModal(true);
  };

  const handleDelete = (connection) => {
    deleteConnection(connection);
    setConnections(connections.filter(conn => conn !== connection));
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedConnection(null);
  };

  const handleModalSave = (updatedConnection) => {
    editConnection(updatedConnection);
    setConnections(connections.map(conn => conn === selectedConnection ? updatedConnection : conn));
    setShowModal(false);
    setSelectedConnection(null);
  };

  return (
    <div id="connection-management">
      <h2>Connection Management</h2>
      {connections.map((connection, index) => (
        <div key={index}>
          <p>{connection.name}</p>
          <button onClick={() => handleEdit(connection)}>Edit</button>
          <button onClick={() => handleDelete(connection)}>Delete</button>
        </div>
      ))}
      {showModal && 
        <Modal 
          title="Edit Connection"
          content={selectedConnection}
          onClose={handleModalClose}
          onSave={handleModalSave}
        />
      }
    </div>
  );
};

export default ConnectionManagement;