import React, { FC } from 'react';
import './modalSuccessForm.scss';
import Success from '../../../assets/checked.png';

interface IPropsModal {
  isActive: boolean;
}

const ModalSuccessForm: FC<IPropsModal> = ({ isActive }) => {
  return (
    <div className={`modal-success-form ${isActive ? 'active' : ''}`}>
      <h1>The card was created Successfully!!!</h1>
      <img src={Success} />
    </div>
  );
};

export default ModalSuccessForm;
