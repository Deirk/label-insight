import { useCallback, useState } from 'react';
import { PhotoGrid, PhotoModalItem } from '../components';
import { useJsonplaceholderPhotos } from '../hooks';

export const MainView = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );
  const { isLoading, photos } = useJsonplaceholderPhotos();

  const closeModal = useCallback( () => {
    setIsOpen( false );
  }, [] );

  const openModal = useCallback( ( selectedItem: number ) => {
    setSelectedIndex( selectedItem );
    setIsOpen( true );
  }, [] );


  return (
    <>
      <h1 className="text-3xl font-bold text-gray-600 text-center mb-5 pt-5">Label Insight</h1>
      <div className="flex flex-col w-full h-fit flex-wrap items-center justify-center content-center">
        {/*Grid*/ }
        { isLoading ? <p className="text-3xl text-blue-800">Loading...</p> : <>
          <PhotoGrid photos={ photos } openModal={ openModal } />
        </>
        }
      </div>
      { isOpen && <PhotoModalItem photo={ photos[ selectedIndex ] } closeModal={ closeModal } /> }
    </>
  );
};