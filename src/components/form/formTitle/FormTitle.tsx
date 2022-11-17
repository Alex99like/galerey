import { validateMessage } from 'components/utils/validateMessag';
import React, { FC } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { IForm } from '../Form';

interface IFormTitle {
  register?: UseFormRegister<IForm>;
  errors: Partial<FieldErrorsImpl<IForm>>;
  children?: React.ReactNode;
}

const FormTitle: FC<IFormTitle> = ({ children, errors, register }) => {
  return (
    <div className={`title-photo`}>
      <label>
        <fieldset>
          <legend className={errors.title ? 'error' : ''}>
            {errors.title ? errors.title.message : 'Title Photo'}
          </legend>
          {children || (
            <input
              {...register!('title', {
                required: validateMessage.required,
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z0-9-_\.]{3,12}$/,
                  message: validateMessage.title,
                },
              })}
              type={'text'}
              placeholder={'Enter title your photo...'}
            />
          )}
        </fieldset>
      </label>
    </div>
  );
};

export default FormTitle;
