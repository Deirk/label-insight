import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as UseCase from '../../domain/use-cases';
import { usePhotoDescriptionStore } from '../../config/store/zustand';


interface Inputs {
  description: string;
}
export const usePhotoDescription = (id: number, closeModal: () => void) => {
  const descriptions = UseCase.getPhotoDescriptionsUseCase( usePhotoDescriptionStore() );
  const addDescription = UseCase.addPhotoDescriptionUseCase( usePhotoDescriptionStore() );

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<Inputs>();

  useEffect( () => {
    setValue( "description", descriptions[ +id ] || "" );  
  },[])

  const onSubmit: SubmitHandler<Inputs> = ( data ) => {
    addDescription( data.description, `${id}` );
    closeModal();
  };

  return {
    register,
    handleSubmit,
    onSubmit
  }
}