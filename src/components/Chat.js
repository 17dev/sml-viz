import React, { useState, useEffect } from 'react';
import { getChat, updateChat } from '../utils/chat';
import Modal from './Modal';

const Chat = ({ chatId }) => {
  const [chat, setChat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchChat();
  }, [chatId]);

  const fetchChat = async () => {
    const chatData = await getChat(chatId);
    setChat(chatData);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = async (updatedChat) => {
    await updateChat(chatId, updatedChat);
    fetchChat();
    setIsModalOpen(false);
  };

  if (!chat) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{chat.name}</h2>
      <button onClick={handleEdit}>Edit</button>
      {isModalOpen && (
        <Modal
          title="Edit Chat"
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
          content={chat}
        />
      )}
    </div>
  );
};

export default Chat;