import React, { Component } from 'react';

interface IPropsDate {
  input: React.RefObject<HTMLInputElement>;
  validate: React.RefObject<HTMLLegendElement>;
}
class FormDate extends Component<IPropsDate> {
  render(): React.ReactNode {
    return (
      <div className={'date-photo'}>
        <label>
          <fieldset>
            <legend ref={this.props.validate}>Data Create Photo</legend>
            <input ref={this.props.input} type={'date'} placeholder={'Enter title your photo...'} />
          </fieldset>
        </label>
      </div>
    );
  }
}

export default FormDate;
