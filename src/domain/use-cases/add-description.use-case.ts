import { PhotoDescriptions } from '../entities';
import { PhotoDescriptionsActions } from '../../infrastructure/interfaces';

export const addPhotoDescriptionUseCase = ( store: PhotoDescriptions & PhotoDescriptionsActions ) => {
  const addDescription = store.addPhotoDescription;
  return addDescription;
};