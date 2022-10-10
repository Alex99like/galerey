import React from 'react';
import { render, screen } from '@testing-library/react';
import FormDate from './FormDate';

describe('test approve', () => {
  const valueDate = {
    current: { value: '2022-10-07' },
  };

  test('test error', async () => {
    render(<FormDate validate={false} input={valueDate as React.RefObject<HTMLInputElement>} />);
    screen.getByText('The date cannot be higher than the current one');
  });
  test('test right', async () => {
    render(<FormDate validate={true} input={valueDate as React.RefObject<HTMLInputElement>} />);
    screen.getByText('Data Create Photo');
  });
});
