import Form from 'components/form/Form';
import ListCustomCards from 'components/listCustomCards/ListCustomCards';
import React, { useContext, useState } from 'react';
import './formPage.scss';
import { ICustomCardWhoSee } from 'components/common/customCard/CustomCard';

export interface ICustomCard {
  title: string;
  profile: string;
  date: string;
  color: string;
  whoSee: ICustomCardWhoSee;
  approve: boolean;
}

export interface ICard {
  image: string;
  title: string;
  date: string;
  select: string;
  radio: string;
  approve: string;
}
interface IValueContext {
  card: ICard[];
  setCard: React.Dispatch<React.SetStateAction<ICard[]>>;
}

const FormProvider = React.createContext<IValueContext>({} as IValueContext);

export const useFormContext = () => useContext(FormProvider);

const FormPage = () => {
  const [card, setCard] = useState<ICard[]>([]);

  return (
    <div className={'form-page-container'}>
      <FormProvider.Provider value={{ card, setCard }}>
        <Form />
        <ListCustomCards />
      </FormProvider.Provider>
    </div>
  );
};

export default FormPage;
