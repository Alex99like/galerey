import React, { useState } from 'react';
import './form.scss';
import FormApprove from './formApprove/FormApprove';
import FormDate from './formDate/FormDate';
import FormRadio from './formRadio/FormRadio';
import FormSelect from './formSelect/FormSelect';
import FormTitle from './formTitle/FormTitle';
import ProfileLoad from './profileLoad/ProfileLoad';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import ModalSuccessForm from 'components/common/modalSuccessForm/ModalSuccess';
import { useSelectorReduce } from 'context/ReducerProvider';
import { ActionType } from 'context/Reduce.type';
import { validateMessage } from 'components/utils/validateMessag';
export interface IForm {
  image: Blob;
  title: string;
  date: string;
  select: string;
  radio: string;
  approve: string;
}

const Form = () => {
  const {
    register,
    reset,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const [errorsData, serErrorsData] = useState<typeof errors | null>(null);
  const [photo, setPhoto] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { dispatch, customCard } = useSelectorReduce();

  const storageError = () => {
    if (Object.keys(errors).length === 0) {
      serErrorsData(null);
      setDisabled(false);
    } else {
      setDisabled(true);
      serErrorsData(errors);
    }
  };

  const validateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.files;
    if (value !== null && value && value[0] && value[0].type.split('/')[0] === 'image') {
      clearErrors('image');
      return true;
    } else {
      setError('image', { type: 'validate', message: validateMessage.image });
      return false;
    }
  };

  const successSaveCard = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    if (errorsData && Object.keys(errorsData).length > 0) {
      setDisabled(true);
    } else {
      const card = { ...data, image: photo, id: Date.now().toString() };
      dispatch &&
        dispatch({
          type: ActionType.SET_CUSTOM_CARD,
          payload: { customCard: [...customCard, card] },
        });
      successSaveCard();
      handleReset();
    }
  };

  const error: SubmitErrorHandler<IForm> = () => {
    setDisabled(true);
  };

  const handleReset = () => {
    reset();
    setPhoto('');
    setDisabled(false);
  };

  return (
    <form
      onChange={storageError}
      onSubmit={handleSubmit(onSubmit, error)}
      className={'form-container'}
    >
      <ModalSuccessForm isActive={isSuccess} />
      <ProfileLoad
        register={register}
        errors={errors}
        photo={photo}
        validate={validateImage}
        setPhoto={setPhoto}
      />
      <div className={'data-form-container'}>
        <FormTitle errors={errors} register={register} />
        <div className={'date-and-color'}>
          <FormDate errors={errors} register={register} />
          <FormSelect errors={errors} register={register} />
        </div>
        <FormRadio register={register} errors={errors} />
        <FormApprove register={register} errors={errors} />
        <div className={'btn-container'}>
          <button disabled={disabled} type={'submit'}>
            Submit
          </button>
          <button onClick={handleReset} type={'reset'}>
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
