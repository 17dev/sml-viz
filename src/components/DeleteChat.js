import React, { useState } from 'react';
import { deleteChat } from '../utils/chat';
import Modal from './Modal';

const DeleteChat = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleDelete = async () => {
    if (selectedChat) {
      const response = await deleteChat(selectedChat);
      if (response.success) {
        alert('Chat deleted successfully');
      } else {
        alert('Failed to delete chat');
      }
      setSelectedChat(null);
      setShowModal(false);
    }
  };

  const handleOpenModal = (chatId) => {
    setSelectedChat(chatId);
    setShowModal(true);
  };

  return (
    <div id="delete-chat">
      <button onClick={() => handleOpenModal(chatId)}>Delete Chat</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Are you sure you want to delete this chat?</h2>
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={() => setShowModal(false)}>No, Cancel</button>
        </Modal>
      )}
    </div>
  );
};

export default DeleteChat;