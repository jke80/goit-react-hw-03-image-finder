import React from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };
  handleClick = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { url, tags, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li className={css.galleryItem}>
        <img
          className={css.galleryItemImage}
          onClick={this.handleClick}
          src={url}
          alt={tags}
        />
        {showModal && <Modal url={largeImageUrl} tags={tags} />}
      </li>
    );
  }
}
