import React from 'react';
import { render, screen } from '@testing-library/react';
import FormDate from './FormDate';
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
      <FormDate errors={errors}>
        <input type={'date'} />
      </FormDate>
    );
    screen.getByText('Data Create Photo');
  });
});
