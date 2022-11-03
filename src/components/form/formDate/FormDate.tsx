import React, { FC } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { IForm, validateMessage } from '../Form';

interface IFormDate {
  register?: UseFormRegister<IForm>;
  errors: Partial<FieldErrorsImpl<IForm>>;
  children?: React.ReactNode;
}

const FormDate: FC<IFormDate> = ({ register, errors, children }) => {
  return (
    <div className={'date-photo'}>
      <label>
        <fieldset>
          <legend className={errors.date ? 'error' : ''}>
            {errors.date ? errors.date.message : 'Data Create Photo'}
          </legend>
          {children ? (
            children
          ) : (
            <input
              {...register!('date', {
                required: validateMessage.required,
                pattern: {
                  value: /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/,
                  message: validateMessage.date,
                },
              })}
              type={'date'}
            />
          )}
        </fieldset>
      </label>
    </div>
  );
};

export default FormDate;
