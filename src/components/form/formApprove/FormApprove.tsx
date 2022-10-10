import React, { Component } from 'react';
import { IApprove } from '../Form';

interface IPropsApprove {
  input: IApprove;
  validate: boolean;
}
class FormApprove extends Component<IPropsApprove> {
  errorMessage: string;

  constructor(props: IPropsApprove) {
    super(props);
    this.errorMessage = 'Read the terms of use of the service';
  }

  render() {
    return (
      <fieldset className={'form-approve'}>
        <legend className={this.props.validate ? '' : 'error'}>
          {this.props.validate ? 'Your Approved' : this.errorMessage}
        </legend>
        <div className={'alerts'}>
          <input ref={this.props.input.alerts} id={'alerts'} value={'alerts'} type={'checkbox'} />
          <label htmlFor={'alerts'}>
            <span>Do you want to receive alerts ?</span>
          </label>
        </div>
        <div className={'likes'}>
          <input ref={this.props.input.likes} id={'likes'} value={'likes'} type={'checkbox'} />
          <label htmlFor={'likes'}>
            <span>I have read and agree with the user agreement</span>
          </label>
        </div>
      </fieldset>
    );
  }
}

export default FormApprove;
