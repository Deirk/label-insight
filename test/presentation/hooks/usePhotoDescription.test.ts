/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { usePhotoDescription } from '../../../src/presentation/hooks/usePhotoDescription';
import * as UseCase from '../../../src/domain/use-cases';
import { act } from 'react';

jest.mock('../../../src/domain/use-cases');
jest.mock('../../../src/config/store/zustand/photo-descriptions/photo-description.store');

describe( 'Test in usePhotoDescription', () => {

  const mockCloseModal = jest.fn();
  const mockGetPhotoDescriptionsUseCase = jest.spyOn(UseCase, 'getPhotoDescriptionsUseCase');
  const mockAddPhotoDescriptionUseCase = jest.spyOn(UseCase, 'addPhotoDescriptionUseCase');
  const submitSpy = jest.fn();

  beforeEach(() => {
    mockGetPhotoDescriptionsUseCase.mockReturnValue({ '1': 'Test description' });
    mockAddPhotoDescriptionUseCase.mockReturnValue( submitSpy );
  });


  afterEach( () => {
    jest.restoreAllMocks();
  } );

  test( 'usePhotoDescription should initialize the form with the correct description', () => {
    const { result } = renderHook( () => usePhotoDescription( 1, mockCloseModal ) );

    expect( result.current.register ).toBeDefined();
    expect( result.current.handleSubmit ).toBeDefined();
    expect( result.current.onSubmit ).toBeDefined();
  } );

  test('usePhotoDescription should call getPhotoDescriptionsUseCase', () => {
    const { result } = renderHook(() => usePhotoDescription(1, mockCloseModal));

    expect(UseCase.getPhotoDescriptionsUseCase).toHaveBeenCalled();
  });

  test('usePhotoDescription should call addDescription and closeModal on form submit', async () => {
    const { result } = renderHook(() => usePhotoDescription(1, mockCloseModal));

    await act(async () => {
      await result.current.onSubmit({ description: 'New description' });
    });

    expect(submitSpy).toHaveBeenCalledWith('New description', '1');
    expect(mockCloseModal).toHaveBeenCalled();
    expect(UseCase.addPhotoDescriptionUseCase).toHaveBeenCalled();
  });

} );