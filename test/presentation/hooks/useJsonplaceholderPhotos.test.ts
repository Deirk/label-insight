/**
 * @jest-environment jsdom
 */

import axios, { AxiosResponse } from 'axios';
import { mockJsonplaceholderPhotosEntities, mockJsonplaceholderPhotosResponse } from '../../fixtures/jsonplaceholder-photos';
import { renderHook, waitFor } from '@testing-library/react';
import { useJsonplaceholderPhotos } from '../../../src/presentation/hooks/useJsonplaceholderPhotos';
describe( 'test in useJsonplaceholderPhotos', () => {

  afterEach( () => {
    jest.restoreAllMocks();
  } );

  beforeEach( () => {
    jest.restoreAllMocks();
  } );

  test( 'useJsonplaceholderPhotos should return loading true and empty array', async () => {
    const { result } = await waitFor( () => renderHook( () => useJsonplaceholderPhotos() ) );
    expect( result.current ).toEqual( { isLoading: true, photos: [], } );
  } );

  test( 'useJsonplaceholderPhotos should return loading true and empty array', async () => {
    const mAxiosResponse = {
      data: mockJsonplaceholderPhotosResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const { result } = await waitFor( () => renderHook( () => useJsonplaceholderPhotos() ) );

    await waitFor( () => expect( result.current ).toMatchObject( {
      isLoading: false,
      photos: mockJsonplaceholderPhotosEntities,
    } ) );
  } );
} );