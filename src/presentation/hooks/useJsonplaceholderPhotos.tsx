import { useEffect, useState } from 'react';
import { jsonplaceholderfetcher } from '../../config/adapters';
import { Photo } from '../../domain/entities';
import * as UseCase from '../../domain/use-cases';

export const useJsonplaceholderPhotos = () => {
  const [ isLoading, setIsLoading ] = useState( true );
  const [ photos, setPhotos ] = useState<Photo[]>( [] );

  useEffect( () => {
    initialLoad();
  }, [] );

  const initialLoad = async () => {
    setIsLoading( true );
    const data = await UseCase.getPhotosUseCase(jsonplaceholderfetcher);
    setPhotos( data );
    setIsLoading( false );
  };

  return {
    isLoading,
    photos,
  };
};