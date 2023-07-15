```javascript
import { database } from './database';

export const listChats = async () => {
  try {
    const chats = await database.query('SELECT * FROM chats');
    return chats;
  } catch (error) {
    console.error('Error listing chats:', error);
    return [];
  }
};

export const createChat = async (chatName) => {
  try {
    const result = await database.query('INSERT INTO chats (name) VALUES (?)', [chatName]);
    return result.insertId;
  } catch (error) {
    console.error('Error creating chat:', error);
    return null;
  }
};

export const editChat = async (chatId, newChatName) => {
  try {
    await database.query('UPDATE chats SET name = ? WHERE id = ?', [newChatName, chatId]);
  } catch (error) {
    console.error('Error editing chat:', error);
  }
};

export const deleteChat = async (chatId) => {
  try {
    await database.query('DELETE FROM chats WHERE id = ?', [chatId]);
  } catch (error) {
    console.error('Error deleting chat:', error);
  }
};
```