import { usePhotoDescriptionStore } from '../../../src/config/store/zustand/photo-descriptions/photo-description.store';
import { testState } from '../../fixtures/store';
import { getPhotoDescriptionsUseCase } from '../../../src/domain/use-cases/get-photo-descriptions.use-case';


describe( 'test in get-photo-descriptions.use-case.ts', () => {
  test( 'should return a store state', () => {
    jest.spyOn( usePhotoDescriptionStore, 'getState' ).mockReturnValue( {
      ...testState,
      addPhotoDescription: jest.fn(),
    } );
    const store = usePhotoDescriptionStore.getState();
    const descriptions = getPhotoDescriptionsUseCase( store );
    expect( descriptions ).toEqual( testState.descriptions );
  } );
} );