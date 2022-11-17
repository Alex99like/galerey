import React, { FC } from 'react';
import People from '../../../assets/teamwork.png';
import Friends from '../../../assets/friends.png';
import Favorites from '../../../assets/star.png';
import { IForm } from '../Form';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { validateMessage } from 'components/utils/validateMessag';
interface IFormRadio {
  errors: Partial<FieldErrorsImpl<IForm>>;
  register?: UseFormRegister<IForm>;
  children?: React.ReactNode;
}
const FormRadio: FC<IFormRadio> = ({ register, errors, children }) => {
  return (
    <fieldset className={'form-radio'}>
      <legend className={errors.radio ? 'error' : ''}>
        {errors.radio ? validateMessage.radio : 'Who sees your Photo?'}
      </legend>
      {children || (
        <>
          <div className={'container'}>
            <input
              {...register!('radio', { required: validateMessage.radio })}
              value={'all-people'}
              id={'all-people'}
              type={'radio'}
            />
            <label htmlFor={'all-people'}>
              <span>All People</span>
              <img src={People} />
            </label>
          </div>
          <div className={'container'}>
            <input
              {...register!('radio', { required: validateMessage.radio })}
              id={'friends'}
              value={'friends'}
              type={'radio'}
            />
            <label htmlFor={'friends'}>
              <span>Friends</span>
              <img src={Friends} />
            </label>
          </div>
          <div className={'container'}>
            <input
              {...register!('radio', { required: validateMessage.radio })}
              id={'favorites'}
              value={'favorites'}
              type={'radio'}
            />
            <label htmlFor={'favorites'}>
              <span>Favorites</span>
              <img src={Favorites} />
            </label>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default FormRadio;
