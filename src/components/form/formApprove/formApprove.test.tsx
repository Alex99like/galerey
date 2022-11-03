import React from 'react';
import { render, screen } from '@testing-library/react';
import FormApprove from './FormApprove';
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
      <FormApprove errors={errors}>
        <input id={'likes'} value={'likes'} type={'checkbox'} />
      </FormApprove>
    );
    screen.getByText('Your Approved');
  });
});
