import { Photo } from '../../../domain/entities';

interface Props {
  openModal: () => void;
  photo: Photo;
}

export const PhotoGridItem = ( { openModal, photo }: Props ) => {
  return (
    <div
      onClick={ () => openModal() }
      className="w-fit bg-white p-3 transform transition-transform hover:scale-105 cursor-pointer rounded-lg">
      <img className="w-px[150] object-cover" src={photo.thumbnailUrl} />
      <p className="w-20 text-center text-black mt-2 text-ellipsis overflow-hidden whitespace-nowrap">{photo.title}</p>
    </div>
  );
};