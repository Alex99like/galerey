import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileLoad from './ProfileLoad';

describe('test approve', () => {
  const valueText = {
    current: { value: 'test' },
  };

  const valueImage = {};

  test('test error', async () => {
    render(
      <ProfileLoad
        validate={false}
        input={valueText as React.RefObject<HTMLInputElement>}
        image={valueImage as React.RefObject<HTMLImageElement>}
      />
    );
    screen.getByText('invalid file format images are allowed (jpg, jpeg, svg)');
  });
});
