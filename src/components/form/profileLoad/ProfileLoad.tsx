import { validateMessage } from 'components/utils/validateMessag';
import React, { FC, useState } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import Photo from '../../../assets/photo.jpg';
import { IForm } from '../Form';

interface IFormProfileProps {
  errors: Partial<FieldErrorsImpl<IForm>>;
  register: UseFormRegister<IForm>;
  validate: (e: React.ChangeEvent<HTMLInputElement>) => boolean;
  photo: string;
  setPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileLoad: FC<IFormProfileProps> = ({ errors, register, validate, photo, setPhoto }) => {
  const [dropClass, setDropClass] = useState(false);

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      validate(e) &&
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type.includes('image')
    ) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    } else {
      setPhoto('');
    }
  };

  const handlerDragEnter = () => {
    setDropClass(true);
  };

  const handlerDragLeave = () => {
    setDropClass(false);
  };

  const handlerMouseEnter = () => {
    setDropClass(true);
  };

  const handlerMouseLeave = () => {
    setDropClass(false);
  };

  return (
    <fieldset
      onDragLeave={handlerDragLeave}
      onDragEnter={handlerDragEnter}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
      className="form-avatar"
    >
      <div className={`hover-drag ${dropClass ? 'active' : ''}`}>
        <span>Upload Your Photo!!!</span>
      </div>
      <legend>Your Photo</legend>
      <label className={'label-avatar'} htmlFor="upload-profile">
        {photo ? <img src={photo} /> : <img src={Photo} alt="" />}

        <input
          {...register('image', {
            required: validateMessage.image,
          })}
          onChange={onChangeImage}
          accept="image/png, image/gif, image/jpeg"
          id="upload-profile"
          type={'file'}
        />
        <p className={!errors.image ? '' : 'error'}>
          {!errors.image ? (
            <>
              Сlick here or drag the image to <span>Download!!!</span>
            </>
          ) : (
            'invalid file format images are allowed (jpg, jpeg, svg)'
          )}
        </p>
      </label>
    </fieldset>
  );
};

export default ProfileLoad;
