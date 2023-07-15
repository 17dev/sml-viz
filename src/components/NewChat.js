import React, { useState } from 'react';
import { createChat } from '../utils/chat';

const NewChat = () => {
  const [chatName, setChatName] = useState('');

  const handleChatNameChange = (event) => {
    setChatName(event.target.value);
  };

  const handleCreateChat = () => {
    createChat(chatName);
    setChatName('');
  };

  return (
    <div id="new-chat">
      <input
        type="text"
        value={chatName}
        onChange={handleChatNameChange}
        placeholder="Enter chat name"
      />
      <button onClick={handleCreateChat}>Create Chat</button>
    </div>
  );
};

export default NewChat;