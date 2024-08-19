import { Photo } from '../../../domain/entities';
import { PhotoGridItem } from './PhotoGridItem';

interface Props {
  photos: Photo[];
  openModal: (index: number) => void;
}

export const PhotoGrid = ( { photos, openModal }: Props ) => {
  return (
    <div className="lg:w-2/3 w-100 grid grid-cols-2 md:grid-cols-5 place-items-center gap-3 p-10">
      {
        photos.map( ( photo, index ) => (
          <PhotoGridItem key={ photo.id } photo={ photo } openModal={ () => openModal( index ) } />
        ) )
      }
    </div>
  );
};