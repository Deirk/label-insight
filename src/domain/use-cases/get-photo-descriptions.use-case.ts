import { PhotoDescriptions } from '../entities';
import { PhotoDescriptionsActions } from '../../infrastructure/interfaces';

export const getPhotoDescriptionsUseCase = ( store: PhotoDescriptions & PhotoDescriptionsActions ) => {
  const descriptions = store.descriptions;
  return descriptions;
};