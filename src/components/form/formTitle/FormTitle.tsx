import React, { Component } from 'react';

interface IPropsTitle {
  input: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

interface IStateTitle {
  error: boolean;
}

class FormTitle extends Component<IPropsTitle, IStateTitle> {
  errorMessage: string;
  constructor(props: IPropsTitle) {
    super(props);
    this.errorMessage =
      'the name can only contain Latin letters and numbers from 3 to 12 characters';
  }
  render(): React.ReactNode {
    return (
      <div className={`title-photo`}>
        <label>
          <fieldset>
            <legend className={this.props.validate ? '' : 'error'}>
              {this.props.validate ? 'Title Photo' : this.errorMessage}
            </legend>
            <input ref={this.props.input} type={'text'} placeholder={'Enter title your photo...'} />
          </fieldset>
        </label>
      </div>
    );
  }
}

export default FormTitle;
