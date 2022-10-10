import React, { Component } from 'react';
import './modalSuccessForm.scss';
import Success from '../../../assets/checked.png';

interface IPropsModal {
  isActive: boolean;
}

class ModalSuccessForm extends Component<IPropsModal> {
  constructor(props: IPropsModal) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={`modal-success-form ${this.props.isActive ? 'active' : ''}`}>
        <h1>The card was created Successfully!!!</h1>
        <img src={Success} />
      </div>
    );
  }
}

export default ModalSuccessForm;
