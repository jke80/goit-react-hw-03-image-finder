import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'Services/pixabayApi';
import css from './ImageGallery.module.css';
export class ImageGallery extends React.Component {
  state = {
    gallery: [],
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchStr, page } = this.props;

    if (prevProps.searchStr !== searchStr) {
      const response = await getImages({ q: searchStr });
      this.setState({ gallery: response.hits });
      return;
    }
    if (prevProps.page !== page && this.state.gallery.length) {
      const response = await getImages({ q: searchStr, page });
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...response.hits],
      }));
    }
  }
  render() {
    const { gallery } = this.state;
    const { onModalOpen } = this.props;
    return (
      <ul className={css.gallery}>
        {gallery.map(galleryItem => {
          return (
            <ImageGalleryItem
              key={galleryItem.id}
              url={galleryItem.webformatURL}
              tags={galleryItem.tags}
              largeImageUrl={galleryItem.largeImageURL}
              onModalOpen={onModalOpen}
            />
          );
        })}
      </ul>
    );
  }
}
