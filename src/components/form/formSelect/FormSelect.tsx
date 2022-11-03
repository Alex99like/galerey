import { colorOption } from 'components/utils/colorOptions';
import React, { FC } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { IForm, validateMessage } from '../Form';

interface IFormSelect {
  register?: UseFormRegister<IForm>;
  children?: React.ReactNode;
  errors: Partial<FieldErrorsImpl<IForm>>;
}

const FormSelect: FC<IFormSelect> = ({ register, errors, children }) => {
  return (
    <div className={'color-card'}>
      <label>
        <fieldset>
          <legend className={errors.select ? 'error' : ''}>
            {errors.select ? errors.select.message : 'Color Card'}
          </legend>
          {children ? (
            children
          ) : (
            <select
              {...register!('select', {
                required: validateMessage.select,
                pattern: {
                  message: validateMessage.select,
                  value: /rgba/,
                },
              })}
            >
              <option style={{ background: 'gray' }}>Сhoose Color</option>
              {colorOption.map((color) => (
                <option key={color.name} value={color.value} style={{ background: color.value }}>
                  {color.name}
                </option>
              ))}
            </select>
          )}
        </fieldset>
      </label>
    </div>
  );
};

export default FormSelect;
