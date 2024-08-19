import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { PhotoDescriptions } from '../../../../domain/entities';
import { PhotoDescriptionsActions } from '../../../../infrastructure/interfaces';

const storeApi: StateCreator<PhotoDescriptions & PhotoDescriptionsActions> = ( set ) => ( {
  descriptions: {},
  addPhotoDescription( description, id ) {
    set( ( state: PhotoDescriptions ) => {
      return {
        descriptions: {
          ...state.descriptions,
          [ id ]: description
        }
      }
    } );
  },
} );

export const usePhotoDescriptionStore = create<PhotoDescriptions & PhotoDescriptionsActions>()(
  devtools(
    persist(
      storeApi,
      { name: 'photo-description-store' }
    )
  )
);