import React from 'react';
import css from './Modal.module.css';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = e => {
    const { onCloseModal } = this.props;
    
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  handleClick = e => {
    const { onCloseModal } = this.props;
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  render() {
    const { url, tags } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={url} alt={tags} />
        </div>
      </div>
    );
  }
}
