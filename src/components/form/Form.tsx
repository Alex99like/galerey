import React, { Component } from 'react';
import './form.scss';
import FormApprove from './FormApprove';
import FormDate from './FormDate';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormTitle from './FormTitle';
import ProfileLoad from './ProfileLoad';
import Validate from 'components/common/Validate';
import { ISaveFnGet } from 'page/formPage/FormPage';

interface IProfile {
  input: React.RefObject<HTMLInputElement>;
  img: React.RefObject<HTMLImageElement>;
}

export interface IValidateForm {
  profile: React.RefObject<HTMLParagraphElement>;
  title: React.RefObject<HTMLLegendElement>;
  date: React.RefObject<HTMLLegendElement>;
  color: React.RefObject<HTMLLegendElement>;
  whoSee: React.RefObject<HTMLLegendElement>;
  approve: React.RefObject<HTMLLegendElement>;
}
export interface IWhoSee {
  allPeople: React.RefObject<HTMLInputElement>;
  fiends: React.RefObject<HTMLInputElement>;
  favorites: React.RefObject<HTMLInputElement>;
}

export interface IApprove {
  alerts: React.RefObject<HTMLInputElement>;
  likes: React.RefObject<HTMLInputElement>;
}

export interface IFormResult {
  profile: IProfile;
  title: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  color: React.RefObject<HTMLSelectElement>;
  whoSee: IWhoSee;
  approve: IApprove;
}

interface IPropsForm {
  getCard: ISaveFnGet;
}

class Form extends Component<IPropsForm> {
  validate: IValidateForm;

  form: IFormResult;

  submit: React.RefObject<HTMLButtonElement>;

  activeValidate: boolean;

  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: IPropsForm) {
    super(props);
    this.validate = {
      profile: React.createRef(),
      title: React.createRef(),
      date: React.createRef(),
      color: React.createRef(),
      whoSee: React.createRef(),
      approve: React.createRef(),
    };
    this.form = {
      profile: {
        input: React.createRef(),
        img: React.createRef(),
      },
      title: React.createRef(),
      date: React.createRef(),
      color: React.createRef(),
      whoSee: {
        allPeople: React.createRef(),
        fiends: React.createRef(),
        favorites: React.createRef(),
      },
      approve: {
        alerts: React.createRef(),
        likes: React.createRef(),
      },
    };
    this.submit = React.createRef();
    this.formRef = React.createRef();
    this.activeValidate = false;
  }

  handlerFormValid() {
    if (!this.activeValidate) this.submit.current!.disabled = false;
    else {
      if (this.validateForm()) this.submit.current!.disabled = false;
      else this.submit.current!.disabled = true;
    }
  }

  validateForm() {
    const validateResult = [
      Validate.validateTitle(this.form.title, this.validate.title),
      Validate.validateDate(this.form.date, this.validate.date),
      Validate.validateColor(this.form.color, this.validate.color),
      Validate.validateWhoSee(this.form.whoSee, this.validate.whoSee),
      Validate.validateApproved(this.form.approve, this.validate.approve),
      Validate.validateImage(this.form.profile.input, this.validate.profile),
    ];

    return validateResult.every((res) => res);
  }

  handlerChangeForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.getCard.fn!(this.form);
      this.activeValidate = false;
      this.handlerReset();
      return this.form;
    } else {
      this.submit.current!.disabled = true;
      this.activeValidate = true;
    }
  }

  handlerReset() {
    this.activeValidate = false;
    this.submit.current!.disabled = true;
    this.formRef.current?.reset();
    Validate.reset(this.validate, this.form);
  }

  render() {
    return (
      <form
        ref={this.formRef}
        onChange={() => this.handlerFormValid()}
        onSubmit={(e) => this.handlerChangeForm(e)}
        className={'form-container'}
      >
        <ProfileLoad
          validate={this.validate.profile}
          image={this.form.profile.img}
          input={this.form.profile.input}
        />
        <div className={'data-form-container'}>
          <FormTitle validate={this.validate.title} input={this.form.title} />
          <div className={'date-and-color'}>
            <FormDate validate={this.validate.date} input={this.form.date} />
            <FormSelect validate={this.validate.color} input={this.form.color} />
          </div>
          <FormRadio validate={this.validate.whoSee} input={this.form.whoSee} />
          <FormApprove validate={this.validate.approve} input={this.form.approve} />
          <div className={'btn-container'}>
            <button disabled ref={this.submit} type={'submit'}>
              Submit
            </button>
            <button onClick={() => this.handlerReset()} type={'reset'}>
              Reset
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
