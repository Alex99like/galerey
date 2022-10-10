import React from 'react';
import { render, screen } from '@testing-library/react';
import FormRadio from './FormRadio';
import { IWhoSee } from '../Form';

describe('test approve', () => {
  const valueWhoSee = {
    allPeople: { current: { checked: true, value: 'allPeople' } },
    fiends: { current: { checked: false } },
    favorites: { current: { checked: false } },
  };

  test('test error', async () => {
    render(<FormRadio validate={false} input={valueWhoSee as IWhoSee} />);
    screen.getByText('Choose who sees your Photo');
  });
  test('test right', async () => {
    render(<FormRadio validate={true} input={valueWhoSee as IWhoSee} />);
    screen.getByText('Who sees your Photo?');
  });
});
