import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Modal from './components/Modal';
import DatabaseConnection from './components/DatabaseConnection';
import DatabaseSettings from './components/DatabaseSettings';
import ConnectionManagement from './components/ConnectionManagement';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChat: null,
      modalOpen: false,
      modalContent: null,
    };
  }

  openModal = (content) => {
    this.setState({
      modalOpen: true,
      modalContent: content,
    });
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: null,
    });
  }

  setCurrentChat = (chat) => {
    this.setState({
      currentChat: chat,
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar setCurrentChat={this.setCurrentChat} openModal={this.openModal} />
        <Chat currentChat={this.state.currentChat} />
        {this.state.modalOpen && 
          <Modal closeModal={this.closeModal}>
            {this.state.modalContent === 'DatabaseConnection' && <DatabaseConnection />}
            {this.state.modalContent === 'DatabaseSettings' && <DatabaseSettings />}
            {this.state.modalContent === 'ConnectionManagement' && <ConnectionManagement />}
          </Modal>
        }
      </div>
    );
  }
}

export default App;