import { Photo } from '../../../../src/domain/entities';
import { PhotoResponse } from '../../../../src/infrastructure/interfaces';
import { PhotoMapper } from '../../../../src/infrastructure/mapper/jsonplaceholder/photo.mapper';

describe( 'test in photo.mapper.test.ts', () => {
  const photoResponsTest: PhotoResponse = {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/600/92c952',
  };

  const photoEntityTest: Photo = {
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/600/92c952',
  };

  test( 'fromPhotoResponseToEntity must return a photoEntity', () => {
    expect( PhotoMapper.fromPhotoResponseToEntity( photoResponsTest ) ).toEqual( photoEntityTest );
  } );
} );