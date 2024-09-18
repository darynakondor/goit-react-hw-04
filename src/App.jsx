import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/Photo/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { requestPhotosBySearchValue } from './services/api';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(null);

  useEffect(() => {
    if(searchValue === null) return;
    const getPhotosBySearchValue = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await requestPhotosBySearchValue(searchValue, page);
        setPhotos((prevPhotos) => [...(prevPhotos || []), ...data.results]);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getPhotosBySearchValue();

  }, [searchValue, page])

  const onSubmit = (searchTerm) => {
    if (searchTerm !== searchValue) {
      setSearchValue(searchTerm);
      setPhotos([]);
      setPage(1);
    } else {
      setPage(1);
    }
  }

  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  function openModal(photoUrl) {
    setSelectedPhotoUrl(photoUrl);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
    setSelectedPhotoUrl(null);
  };

  const notify = () => toast('Enter a search word...');

  return (
    <>
      <SearchBar notify={notify} onSubmit={onSubmit}/>
      <div className='home'>
        <div className="container">
          {photos?.length > 0 && <ImageGallery openModal={openModal} photos={photos} />}
          {loading && <Loader/>}
          {error !== null && <ErrorMessage error={error}/>}
          {photos?.length > 0 && !loading && <LoadMoreBtn loadMorePhotos={loadMorePhotos}/>}
        </div>
      </div>
      <ImageModal onRequestClose={closeModal} isOpen={modalIsOpen} photoUrl={selectedPhotoUrl}/>
      <Toaster position="top-right"/>
    </>
  )
}

export default App
