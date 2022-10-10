import React, { Component } from 'react';
import './form.scss';
import FormApprove from './formApprove/FormApprove';
import FormDate from './formDate/FormDate';
import FormRadio from './formRadio/FormRadio';
import FormSelect from './formSelect/FormSelect';
import FormTitle from './formTitle/FormTitle';
import ProfileLoad from './profileLoad/ProfileLoad';
import Validate from 'components/common/validate/Validate';
import { ISaveFnGet } from 'page/formPage/FormPage';
import ModalSuccessForm from 'components/common/modalSuccessForm/ModalSuccess';

interface IProfile {
  input: React.RefObject<HTMLInputElement>;
  img: React.RefObject<HTMLImageElement>;
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

interface IValidateDesc {
  profile: boolean;
  title: boolean;
  date: boolean;
  color: boolean;
  whoSee: boolean;
  approve: boolean;
}

interface IStateForm {
  validate: IValidateDesc;
  isDisabled: boolean;
  isSuccess: boolean;
}

class Form extends Component<IPropsForm, IStateForm> {
  isActiveValidate: boolean;
  form: IFormResult;

  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: IPropsForm) {
    super(props);
    this.state = {
      validate: {
        profile: true,
        title: true,
        date: true,
        color: true,
        whoSee: true,
        approve: true,
      },
      isDisabled: true,
      isSuccess: false,
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
    this.formRef = React.createRef();
    this.isActiveValidate = false;
  }

  handlerChangeValidate() {
    if (this.isActiveValidate) {
      this.validateForm();
    } else {
      this.setState({ isDisabled: false });
    }
  }

  validateForm() {
    this.setState({
      validate: {
        title: Validate.validateTitle(this.form.title),
        date: Validate.validateDate(this.form.date),
        color: Validate.validateColor(this.form.color),
        whoSee: Validate.validateWhoSee(this.form.whoSee),
        approve: Validate.validateApproved(this.form.approve),
        profile: Validate.validateImage(this.form.profile.input),
      },
    });
    this.setState((prev) => ({
      isDisabled: !this.checkValidate(prev.validate),
    }));
  }

  checkValidate(formVal: IValidateDesc) {
    return [...Object.values(formVal)].every((res) => res);
  }

  async handlerSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await this.validateForm();
    if (this.checkValidate(this.state.validate)) {
      this.props.getCard.fn!(this.form);
      this.handlerReset();
      this.successSaveCard();
      this.isActiveValidate = false;
    } else {
      this.isActiveValidate = true;
    }
  }
  successSaveCard() {
    this.setState({ isSuccess: true });
    setTimeout(() => {
      this.setState({ isSuccess: false });
    }, 2000);
  }

  resetState() {
    const res = {} as IValidateDesc;
    Object.keys(this.state.validate).forEach((el) => {
      res[el as keyof IValidateDesc] = true;
    });
    this.setState({ validate: res, isDisabled: true });
  }

  handlerReset() {
    this.isActiveValidate = false;
    this.resetState();
    this.formRef.current?.reset();
    Validate.reset(this.form);
  }

  render() {
    return (
      <form
        ref={this.formRef}
        onChange={() => this.handlerChangeValidate()}
        onSubmit={(e) => this.handlerSubmitForm(e)}
        className={'form-container'}
      >
        <ModalSuccessForm isActive={this.state.isSuccess} />
        <ProfileLoad
          validate={this.state.validate.profile}
          image={this.form.profile.img}
          input={this.form.profile.input}
        />
        <div className={'data-form-container'}>
          <FormTitle validate={this.state.validate.title} input={this.form.title} />
          <div className={'date-and-color'}>
            <FormDate validate={this.state.validate.date} input={this.form.date} />
            <FormSelect validate={this.state.validate.color} input={this.form.color} />
          </div>
          <FormRadio validate={this.state.validate.whoSee} input={this.form.whoSee} />
          <FormApprove validate={this.state.validate.approve} input={this.form.approve} />
          <div className={'btn-container'}>
            <button disabled={this.state.isDisabled} type={'submit'}>
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
