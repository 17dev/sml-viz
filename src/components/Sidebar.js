import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Chat Configuration</h2>
      <ul>
        <li>
          <Link to="/database-connection">Database Connection</Link>
        </li>
        <li>
          <Link to="/database-settings">Database Settings</Link>
        </li>
        <li>
          <Link to="/connection-management">Connection Management</Link>
        </li>
      </ul>
      <h2>Chat Navigation</h2>
      <ul>
        <li>
          <Link to="/chat-listing">Chat Listing</Link>
        </li>
        <li>
          <Link to="/new-chat">New Chat</Link>
        </li>
        <li>
          <Link to="/edit-chat">Edit Chat</Link>
        </li>
        <li>
          <Link to="/delete-chat">Delete Chat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;