import React from 'react';
import { render, screen } from '@testing-library/react';
import FormApprove from './FormApprove';
import { IApprove } from '../Form';

describe('test approve', () => {
  const valueApprove = {
    alerts: { current: { checked: false } },
    likes: { current: { checked: true } },
  };

  test('test error', async () => {
    render(<FormApprove validate={false} input={valueApprove as IApprove} />);
    screen.getByText('Read the terms of use of the service');
  });
  test('test right', async () => {
    render(<FormApprove validate={true} input={valueApprove as IApprove} />);
    screen.getByText('Your Approved');
  });
});
