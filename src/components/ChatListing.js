import React, { useEffect, useState } from 'react';
import { listChats } from '../utils/chat';

const ChatListing = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const chatList = await listChats();
    setChats(chatList);
  };

  return (
    <div id="chat-list">
      <h2>Chat Threads</h2>
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <div key={index}>
            <h3>{chat.name}</h3>
            <p>{chat.lastMessage}</p>
          </div>
        ))
      ) : (
        <p>No chats available</p>
      )}
    </div>
  );
};

export default ChatListing;