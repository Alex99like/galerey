import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSelect from './FormSelect';
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
      <FormSelect errors={errors}>
        <select>
          <option value={'green'}>green</option>
        </select>
      </FormSelect>
    );
    screen.getByText('Color Card');
  });
});
