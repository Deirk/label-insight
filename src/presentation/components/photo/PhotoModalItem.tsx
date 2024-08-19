import { Photo } from '../../../domain/entities';
import { usePhotoDescription } from '../../hooks';

interface Props {
  photo: Photo;
  closeModal: () => void;
}

export const PhotoModalItem = ( { closeModal, photo }: Props ) => {

  const {handleSubmit, onSubmit, register} = usePhotoDescription( photo.id, closeModal );

  return (
    <div
      onMouseDown={ () => closeModal() }
      className='w-screen h-full fixed top-0 bg-black bg-opacity-60'>
      <div
        className="flex h-full justify-center content-center items-center md:px-0 px-20">
        <div
          onMouseDown={ ( e ) => e.stopPropagation() }
          className="bg-white md:w-fit md:max-w-full max-w-80 p-5 rounded-lg">
          <h2 className="text-center text-black mt-2 text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">{ photo.title }</h2>
          <img className="object-cover" src={photo.url} />
          <p className="text-left text-black mt-3">Description</p>
          <form onSubmit={ handleSubmit( onSubmit ) }>
            <textarea
              id='description'
              className="description w-full h-20 bg-gray-100 sec p-3 mt-3 border border-gray-300 outline-none text-gray-700"
              placeholder="Description"
              { ...register( "description" ) }
            ></textarea>
            <button
              type="submit"
              className="w-full my-3 middle none center rounded-lg bg-green-500 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Save
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};