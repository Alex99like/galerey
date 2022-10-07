import Form, { IFormResult } from 'components/form/Form';
import ListCustomCards from 'components/listCustomCards/ListCustomCards';
import React from 'react';
import './formPage.scss';
import { ICustomCardWhoSee } from 'components/common/customCard/CustomCard';

type FnGetCard = (form: IFormResult) => void;
export interface ISaveFnGet {
  fn: FnGetCard | null;
}
export interface ICustomCard {
  title: string;
  profile: string;
  date: string;
  color: string;
  whoSee: ICustomCardWhoSee;
  approve: boolean;
}
class FormPage extends React.Component<object, { containerCard: ICustomCard[] }> {
  containerCard: ICustomCard[];
  getCard: ISaveFnGet;

  constructor(props: object) {
    super(props);
    this.containerCard = [];
    this.getCard = { fn: null };
  }

  render() {
    return (
      <div className={'form-page-container'}>
        <Form getCard={this.getCard} />
        <ListCustomCards renderCard={this.getCard} />
      </div>
    );
  }
}

export default FormPage;
