import React from 'react';
import { render, screen } from '@testing-library/react';
import FormTitle from './FormTitle';

describe('test approve', () => {
  const valueColor = {
    current: { value: 'test' },
  };

  test('test error', async () => {
    render(<FormTitle validate={false} input={valueColor as React.RefObject<HTMLInputElement>} />);
    screen.getByText('the name can only contain Latin letters and numbers from 3 to 12 characters');
  });
  test('test right', async () => {
    render(<FormTitle validate={true} input={valueColor as React.RefObject<HTMLInputElement>} />);
    screen.getByText('Title Photo');
  });
});
