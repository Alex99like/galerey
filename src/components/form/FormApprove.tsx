import React, { Component } from 'react';
import { IApprove } from './Form';

interface IPropsApprove {
  input: IApprove;
  validate: React.RefObject<HTMLLegendElement>;
}
class FormApprove extends Component<IPropsApprove> {
  render() {
    return (
      <fieldset className={'form-approve'}>
        <legend ref={this.props.validate}>Your Approved</legend>
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
