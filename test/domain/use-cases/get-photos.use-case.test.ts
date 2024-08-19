import axios, { AxiosResponse } from 'axios';
import { getPhotosUseCase } from '../../../src/domain/use-cases/get-photos.use-case';
import { mockJsonplaceholderPhotosEntities, mockJsonplaceholderPhotosResponse, mockJsonplaceholderToError } from '../../fixtures/jsonplaceholder-photos';
import { jsonplaceholderfetcher } from '../../../src/config/adapters';
describe('test in get-photos.use-case.ts', () => {

  afterEach( () => {
    jest.restoreAllMocks();
  } );

  beforeEach( () => {
    jest.restoreAllMocks();
  } );

  test( 'getPhotosUseCase should return photos entities', async () => {
    const mAxiosResponse = {
      data: mockJsonplaceholderPhotosResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );

    const photos = await getPhotosUseCase( jsonplaceholderfetcher );

    expect( photos ).toEqual( mockJsonplaceholderPhotosEntities );

  } );

  test( 'getPhotosUseCase should return an error when the fetcher return an error', async () => {
    const mAxiosResponse = {
      data: mockJsonplaceholderPhotosResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    try {
      const photos = await getPhotosUseCase( axios );
    } catch (error) {
      expect( error ).toBeDefined();
      expect( error.message ).toBe( 'Cannot get photos from fetcher' );
    }
  } );

  test( 'getPhotosUseCase should return an error when can not map the response', async () => {
    const mAxiosResponse = {
      data: mockJsonplaceholderToError,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    try {
      const photos = await getPhotosUseCase( jsonplaceholderfetcher );
    } catch (error) {
      expect( error ).toBeDefined();
      expect( error.message ).toBe( 'Cannot get photos from fetcher' );
    }
  } );
});