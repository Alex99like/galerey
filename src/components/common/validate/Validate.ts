import { colorOption } from 'components/utils/colorOptions';
import Photo from '../../../assets/photo.jpg';

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

class Validate {
  static validateImage(value: React.RefObject<HTMLInputElement>) {
    const { current } = value;
    if (
      current !== null &&
      current.files &&
      current.files[0] &&
      current.files[0].type.split('/')[0] === 'image'
    ) {
      return true;
    } else {
      return false;
    }
  }

  static validateTitle(value: React.RefObject<HTMLInputElement>) {
    const validate = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,12}$/;
    const { current } = value;

    if (current && validate.test(current.value)) {
      return true;
    } else {
      return false;
    }
  }

  static validateDate(value: React.RefObject<HTMLInputElement>) {
    const validate = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
    const { current } = value;

    if (current && validate.test(current.value) && Date.parse(current.value) <= Date.now()) {
      return true;
    } else {
      return false;
    }
  }

  static validateColor(value: React.RefObject<HTMLSelectElement>) {
    const color = colorOption.map((col) => col.value);
    const { current } = value;
    if (current && color.includes(current.value)) {
      return true;
    } else {
      return false;
    }
  }

  static validateWhoSee(value: IWhoSee) {
    let res = '';
    for (const item of Object.values(value)) {
      const el = item as React.RefObject<HTMLInputElement>;
      if (el.current?.checked) {
        res = el.current.value;
      }
    }
    if (res) {
      return true;
    } else {
      return false;
    }
  }

  static validateApproved(value: IApprove) {
    if (value.likes.current?.checked) {
      return true;
    } else {
      return false;
    }
  }

  static reset(form: IFormResult) {
    const radio = ['allPeople', 'favorites', 'fiends'];
    const checkbox = ['alerts', 'likes'];
    radio.forEach((el) => (form.whoSee[el as keyof IWhoSee].current!.checked = false));
    checkbox.forEach((el) => (form.approve[el as keyof IApprove].current!.checked = false));
    form.date.current!.value = '';
    form.profile.img.current!.src = Photo;
  }
}

export default Validate;
