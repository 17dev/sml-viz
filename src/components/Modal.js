import React from 'react';
import '../styles/modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { children, title } = this.props;

    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={this.closeModal}>X</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;