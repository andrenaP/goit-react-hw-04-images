import { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Modal from 'components/Modal';

export default function ImageGallery({ galleryItems }) {
  const [showModal, setshowModal] = useState(false);
  const [largeImageURL, setlargeImageURL] = useState(null);

  const handleImageClick = largeImageURL => {
    setshowModal(true);
    setlargeImageURL(largeImageURL);
  };
  const onModalClose = () => {
    setshowModal(false);
  };

  return (
    <>
      <ul className="galleryItems">
        {galleryItems.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallPicture={webformatURL}
              alt={tags}
              onClick={handleImageClick}
              largeImage={largeImageURL}
            />
          );
        })}
      </ul>

      {showModal && (
        <Modal largeImage={largeImageURL} onModalClose={onModalClose} />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.object.isRequired),
};
