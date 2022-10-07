import React, { Component } from 'react';

interface IStateSelect {
  value: string;
}

interface IPropsSelect {
  input: React.RefObject<HTMLSelectElement>;
  validate: React.RefObject<HTMLLegendElement>;
}

export const colorOption = [
  { value: 'rgba(105, 105, 105, 0.3)', name: 'Gray' },
  { value: 'rgba(255, 255, 0, 0.384)', name: 'Yellow' },
  { value: 'rgba(251, 5, 5, 0.398)', name: 'Red' },
  { value: 'rgba(3, 230, 3, 0.437)', name: 'Green' },
  { value: 'rgba(3, 192, 230, 0.437)', name: 'Blue' },
  { value: 'rgba(189, 7, 239, 0.319)', name: 'Purple' },
];
class FormSelect extends Component<IPropsSelect, IStateSelect> {
  constructor(props: IPropsSelect) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render(): React.ReactNode {
    return (
      <div className={'color-card'}>
        <label>
          <fieldset style={{ backgroundColor: this.state.value }}>
            <legend ref={this.props.validate}>Color Card</legend>
            <select
              ref={this.props.input}
              onChange={(e) => this.setState({ value: e.target.value })}
            >
              <option style={{ background: 'gray' }}>Сhoose Color</option>
              {colorOption.map((color) => (
                <option key={color.name} value={color.value} style={{ background: color.value }}>
                  {color.name}
                </option>
              ))}
            </select>
          </fieldset>
        </label>
      </div>
    );
  }
}

export default FormSelect;
