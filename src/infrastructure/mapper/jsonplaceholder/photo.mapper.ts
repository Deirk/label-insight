import { Photo } from '../../../domain/entities';
import { PhotoResponse } from '../../interfaces';

export class PhotoMapper {

  static fromPhotoResponseToEntity(photoResponse: PhotoResponse): Photo {
    return {
      id:           photoResponse.id,
      title:        photoResponse.title,
      url:          photoResponse.url,
      thumbnailUrl: photoResponse.thumbnailUrl
    }
  }
};