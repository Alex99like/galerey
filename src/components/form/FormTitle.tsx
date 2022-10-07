import React, { Component } from 'react';

interface IPropsTitle {
  input: React.RefObject<HTMLInputElement>;
  validate: React.LegacyRef<HTMLLegendElement>;
}

interface IStateTitle {
  value: boolean;
}

class FormTitle extends Component<IPropsTitle, IStateTitle> {
  render(): React.ReactNode {
    return (
      <div className={'title-photo'}>
        <label>
          <fieldset>
            <legend ref={this.props.validate}>Title Photo</legend>
            <input ref={this.props.input} type={'text'} placeholder={'Enter title your photo...'} />
          </fieldset>
        </label>
      </div>
    );
  }
}

export default FormTitle;
