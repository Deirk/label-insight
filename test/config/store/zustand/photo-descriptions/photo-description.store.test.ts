/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { usePhotoDescriptionStore } from '../../../../../src/config/store/zustand/photo-descriptions/photo-description.store';
import { act } from 'react';
import { initialState, testDescription, testState } from '../../../../fixtures/store';

const originalState = usePhotoDescriptionStore.getState();

describe( 'test in photo-description.store.ts', () => {

  beforeEach( () => {
    usePhotoDescriptionStore.setState( { ...originalState } );
  } );

  test('Must be initial state', () => {
    const { result } = renderHook( () => usePhotoDescriptionStore() );
    expect( result.current ).toMatchObject( {
      ...initialState,
      addPhotoDescription: expect.any( Function ),
    } );
  });

  test( 'Must add photo description', () => {
    const { result } = renderHook( () => usePhotoDescriptionStore() );
    act( () => { result.current.addPhotoDescription( testDescription[ '1' ], '1' ) } );
    expect( result.current.descriptions ).toEqual( testState.descriptions );
  } );


} );