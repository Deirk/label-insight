import { usePhotoDescriptionStore } from '../../../src/config/store/zustand/photo-descriptions/photo-description.store';
import { initialState, testState } from '../../fixtures/store';
import { addPhotoDescriptionUseCase } from '../../../src/domain/use-cases/add-description.use-case';


describe( 'test in add-descriptions.use-case.ts', () => {
  test( 'should return a store state', () => {
    jest.spyOn( usePhotoDescriptionStore, 'getState' ).mockReturnValue( {
      ...initialState,
      addPhotoDescription: jest.fn(),
    } );
    const store = usePhotoDescriptionStore.getState();
    const addDescriptionSpy = jest.spyOn( store, 'addPhotoDescription' );
    const addDescription = addPhotoDescriptionUseCase( store );

    addDescription( 'test', '1' );
    expect( addDescriptionSpy ).toHaveBeenCalled();
    expect( addDescriptionSpy ).toHaveBeenCalledWith( 'test', '1' );
  } );
} );