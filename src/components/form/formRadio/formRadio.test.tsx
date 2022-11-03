import React from 'react';
import { render, screen } from '@testing-library/react';
import FormRadio from './FormRadio';
import { FieldErrorsImpl } from 'react-hook-form';

describe('test approve', () => {
  const errors: Partial<
    FieldErrorsImpl<{
      image: Blob;
      title: string;
      date: string;
      select: string;
      radio: string;
      approve: string;
    }>
  > = {};
  test('test right', async () => {
    render(
      <FormRadio errors={errors}>
        <div className={'container'}>
          <input value={'all-people'} id={'all-people'} type={'radio'} />
          <label htmlFor={'all-people'}>
            <span>All People</span>
          </label>
        </div>
        <div className={'container'}>
          <input id={'friends'} value={'friends'} type={'radio'} />
          <label htmlFor={'friends'}>
            <span>Friends</span>
          </label>
        </div>
      </FormRadio>
    );
    screen.getByText('Who sees your Photo?');
  });
});
