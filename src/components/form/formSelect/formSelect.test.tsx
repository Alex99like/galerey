import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSelect from './FormSelect';

describe('test approve', () => {
  const valueColor = {
    current: { value: '#ffffff' },
  };

  test('test error', async () => {
    render(
      <FormSelect validate={false} input={valueColor as React.RefObject<HTMLSelectElement>} />
    );
    screen.getByText('Choose Color');
  });
  test('test right', async () => {
    render(<FormSelect validate={true} input={valueColor as React.RefObject<HTMLSelectElement>} />);
    screen.getByText('Color Card');
  });
});
