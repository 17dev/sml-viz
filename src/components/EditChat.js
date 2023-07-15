import React, { useState } from 'react';
import { editChat } from '../utils/chat';
import Modal from './Modal';

const EditChat = () => {
  const [showModal, setShowModal] = useState(false);
  const [chatName, setChatName] = useState('');
  const [chatId, setChatId] = useState(null);

  const handleEditChat = (id, name) => {
    setChatId(id);
    setChatName(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    editChat(chatId, chatName);
    setShowModal(false);
  };

  return (
    <div id="edit-chat">
      <button onClick={() => handleEditChat(chatId, chatName)}>Edit Chat</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Edit Chat</h2>
          <input
            type="text"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
          />
          <button onClick={handleSaveChanges}>Save Changes</button>
        </Modal>
      )}
    </div>
  );
};

export default EditChat;