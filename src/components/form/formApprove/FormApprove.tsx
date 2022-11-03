import React, { FC } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { IForm, validateMessage } from '../Form';
interface IFormApprove {
  errors: Partial<FieldErrorsImpl<IForm>>;
  register?: UseFormRegister<IForm>;
  children?: React.ReactNode;
}

const FormApprove: FC<IFormApprove> = ({ errors, register, children }) => {
  return (
    <fieldset className={'form-approve'}>
      <legend className={errors.approve ? 'error' : ''}>
        {errors.approve ? validateMessage.approve : 'Your Approved'}
      </legend>
      {children ? (
        children
      ) : (
        <>
          <div className={'alerts'}>
            <input id={'alerts'} value={'alerts'} type={'checkbox'} />
            <label htmlFor={'alerts'}>
              <span>Do you want to receive alerts ?</span>
            </label>
          </div>
          <div className={'likes'}>
            <input
              {...register!('approve', {
                required: validateMessage.approve,
              })}
              id={'likes'}
              value={'likes'}
              type={'checkbox'}
            />
            <label htmlFor={'likes'}>
              <span>I have read and agree with the user agreement</span>
            </label>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default FormApprove;
