import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    searchStr: '',
    page: 1,
    isLoading: false,
    isButtonLoadMoreVisible: false,
  };

  handleSubmitSearch = searchStr => {
    this.setState({ searchStr, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { searchStr, isLoading, isButtonLoadMoreVisible, page } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmitSearch} />

        {isLoading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#3f51b5"
          />
        )}

        <ImageGallery searchStr={searchStr} page={page} />

        {isButtonLoadMoreVisible && (
          <Button name="Load more" onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
