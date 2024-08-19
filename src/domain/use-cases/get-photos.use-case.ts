import { HttpAdapter } from '../../config/adapters';
import { PhotoResponse } from '../../infrastructure/interfaces';
import { PhotoMapper } from '../../infrastructure/mapper';
import { Photo } from '../entities';

export const getPhotosUseCase = async ( fetcher: HttpAdapter ): Promise<Photo[]> => {
  try {

    const data = await fetcher.get<PhotoResponse[]>( `/photos?_page=1&_limit=25` );
    const photos = data.map( PhotoMapper.fromPhotoResponseToEntity );

    return photos;

  } catch ( error ) {
    throw new Error( `Cannot get photos from fetcher` );
  }
};