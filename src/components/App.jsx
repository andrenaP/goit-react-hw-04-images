import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import { fetchImages } from './Service';

export const App = () => {
  const [searchQuery, setsearchQuery] = useState('');
  const [galleryItems, setgalleryItems] = useState([]);
  const [page, setpage] = useState(1);
  const [loadMore, setloadMore] = useState(false);
  const [status, setstatus] = useState(null);

  useEffect(() => {
    if (searchQuery === '') return;
    async function getparseResponse() {
      setstatus('pending');
      try {
        const parseResponse = await fetchImages(page, searchQuery);
        if (parseResponse.data.hits.length === 0) {
          Notiflix.Notify.failure(
            `Sorry, there are no images matching search query ${searchQuery}`
          );
          setstatus('rejected');
          setloadMore(false);
          return;
        }

        setgalleryItems(g => [...g, ...parseResponse.data.hits]);
        setstatus('resolved');
        setloadMore(page < Math.ceil(parseResponse.data.totalHits / 12));
      } catch (error) {
        Notiflix.Notify.failure(error);
        setstatus('rejected');
      }
    }
    getparseResponse();
  }, [searchQuery, page]);

  const incrementPage = () => {
    setpage(page + 1);
  };

  const handleFormSubmit = getsearchQuery => {
    if (getsearchQuery === searchQuery) {
      Notiflix.Notify.failure(
        `Sorry, images matching search query ${searchQuery} are already shown`
      );
      return;
    }
    setsearchQuery(getsearchQuery);
    setpage(1);
    setgalleryItems([]);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {galleryItems.length > 0 && <ImageGallery galleryItems={galleryItems} />}
      {loadMore && <Button onClick={incrementPage}></Button>}
    </div>
  );
};
