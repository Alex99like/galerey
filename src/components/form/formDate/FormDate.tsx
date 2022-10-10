import React, { Component } from 'react';

interface IPropsDate {
  input: React.RefObject<HTMLInputElement>;
  validate: boolean;
}
class FormDate extends Component<IPropsDate> {
  errorMessage: string;

  constructor(props: IPropsDate) {
    super(props);
    this.errorMessage = 'The date cannot be higher than the current one';
  }
  render(): React.ReactNode {
    return (
      <div className={'date-photo'}>
        <label>
          <fieldset>
            <legend className={this.props.validate ? '' : 'error'}>
              {this.props.validate ? 'Data Create Photo' : this.errorMessage}
            </legend>
            <input ref={this.props.input} type={'date'} />
          </fieldset>
        </label>
      </div>
    );
  }
}

export default FormDate;
