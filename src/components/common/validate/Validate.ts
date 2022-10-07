import { IApprove, IFormResult, IValidateForm, IWhoSee } from 'components/form/Form';
import { colorOption } from 'components/form/FormSelect';
import Photo from '../../../assets/photo.jpg';

const defaultValue = {
  profile: `Сlick here or drag the image to <span>Download!!!</span>`,
  title: 'Title Photo',
  date: 'Data Create Photo',
  color: 'Color Card',
  whoSee: 'Who sees your Photo?',
  approve: 'Your Approved',
};

class Validate {
  static validateImage(
    value: React.RefObject<HTMLInputElement>,
    elNode: React.RefObject<HTMLParagraphElement>
  ) {
    const { current } = value;
    if (
      current !== null &&
      current.files &&
      current.files[0] &&
      current.files[0].type.split('/')[0] === 'image'
    ) {
      elNode.current?.classList.remove('error');
      elNode.current!.innerHTML = defaultValue.profile;
      return true;
    } else {
      elNode.current?.classList.add('error');
      elNode.current!.innerHTML = `invalid file format images are allowed (jpg, jpeg, svg)`;
      return false;
    }
  }

  static validateTitle(
    value: React.RefObject<HTMLInputElement>,
    elNode: React.RefObject<HTMLLegendElement>
  ) {
    const validate = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,12}$/;
    const { current } = value;

    if (current && validate.test(current.value)) {
      elNode.current?.classList.remove('error');
      elNode.current!.textContent = defaultValue.title;
      return true;
    } else {
      elNode.current?.classList.add('error');
      elNode.current!.textContent =
        'the name can only contain Latin letters and numbers from 3 to 10 characters';
      return false;
    }
  }

  static validateDate(
    value: React.RefObject<HTMLInputElement>,
    elNode: React.RefObject<HTMLLegendElement>
  ) {
    const validate = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
    const { current } = value;

    if (current && validate.test(current.value) && Date.parse(current.value) <= Date.now()) {
      elNode.current?.classList.remove('error');
      elNode.current!.textContent = defaultValue.date;
      return true;
    } else {
      elNode.current?.classList.add('error');
      elNode.current!.textContent = 'The date cannot be higher than the current one';
      return false;
    }
  }

  static validateColor(
    value: React.RefObject<HTMLSelectElement>,
    elNode: React.RefObject<HTMLLegendElement>
  ) {
    const color = colorOption.map((col) => col.value);
    const { current } = value;
    if (current && color.includes(current.value)) {
      elNode.current?.classList.remove('error');
      elNode.current!.textContent = defaultValue.color;
      return true;
    } else {
      elNode.current?.classList.add('error');
      elNode.current!.textContent = 'Choose Color';
      return false;
    }
  }

  static validateWhoSee(value: IWhoSee, elNode: React.RefObject<HTMLLegendElement>) {
    let res = '';
    for (const item of Object.values(value)) {
      const el = item as React.RefObject<HTMLInputElement>;
      if (el.current?.checked) {
        res = el.current.value;
      }
    }
    if (res) {
      elNode.current?.classList.remove('error');
      elNode.current!.textContent = defaultValue.whoSee;
      return true;
    } else {
      elNode.current?.classList.add('error');
      elNode.current!.textContent = 'Choose who sees your Photo';
      return false;
    }
  }

  static validateApproved(value: IApprove, elNode: React.RefObject<HTMLLegendElement>) {
    if (value.likes.current?.checked) {
      elNode.current?.classList.remove('error');
      elNode.current!.textContent = defaultValue.approve;
      return true;
    } else {
      elNode.current?.classList.add('error');
      elNode.current!.textContent = 'Read the terms of use of the service';
      return false;
    }
  }

  static reset(form: IValidateForm, values: IFormResult) {
    for (const value of Object.keys(form)) {
      form[value as keyof IValidateForm].current?.classList.remove('error');
      form[value as keyof IValidateForm].current!.innerHTML =
        defaultValue[value as keyof typeof defaultValue];
    }
    const radio = ['allPeople', 'favorites', 'fiends'];
    const checkbox = ['alerts', 'likes'];
    radio.forEach((el) => (values.whoSee[el as keyof IWhoSee].current!.checked = false));
    checkbox.forEach((el) => (values.approve[el as keyof IApprove].current!.checked = false));
    values.date.current!.value = '';
    values.profile.img.current!.src = Photo;
  }
}

export default Validate;
