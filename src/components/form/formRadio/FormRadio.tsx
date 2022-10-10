import React, { Component } from 'react';
import People from '../../../assets/teamwork.png';
import Friends from '../../../assets/friends.png';
import Favorites from '../../../assets/star.png';
import { IWhoSee } from '../Form';

interface IStateRadio {
  value: string;
}

interface IPropsRadio {
  input: IWhoSee;
  validate: boolean;
}
class FormRadio extends Component<IPropsRadio, IStateRadio> {
  errorMessage: string;

  constructor(props: IPropsRadio) {
    super(props);
    this.errorMessage = 'Choose who sees your Photo';
  }
  render(): React.ReactNode {
    return (
      <fieldset className={'form-radio'}>
        <legend className={this.props.validate ? '' : 'error'}>
          {this.props.validate ? 'Who sees your Photo?' : this.errorMessage}
        </legend>
        <div className={'container'}>
          <input
            ref={this.props.input.allPeople}
            name={'visibility'}
            value={'all-people'}
            id={'all-people'}
            type={'radio'}
          />
          <label htmlFor={'all-people'}>
            <span>All People</span>
            <img src={People} />
          </label>
        </div>
        <div className={'container'}>
          <input
            ref={this.props.input.fiends}
            name={'visibility'}
            id={'friends'}
            value={'friends'}
            type={'radio'}
          />
          <label htmlFor={'friends'}>
            <span>Friends</span>
            <img src={Friends} />
          </label>
        </div>
        <div className={'container'}>
          <input
            ref={this.props.input.favorites}
            name={'visibility'}
            id={'favorites'}
            value={'favorites'}
            type={'radio'}
          />
          <label htmlFor={'favorites'}>
            <span>Favorites</span>
            <img src={Favorites} />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default FormRadio;
