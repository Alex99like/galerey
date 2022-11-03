import React from 'react';
import { render, screen } from '@testing-library/react';
import FormTitle from './FormTitle';
import { FieldErrorsImpl } from 'react-hook-form';
import { colorOption } from 'components/utils/colorOptions';

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
      <FormTitle errors={errors}>
        <select>
          <option style={{ background: 'gray' }}>Сhoose Color</option>
          {colorOption.map((color) => (
            <option key={color.name} value={color.value} style={{ background: color.value }}>
              {color.name}
            </option>
          ))}
        </select>
      </FormTitle>
    );
    screen.getByText('Сhoose Color');
  });
});
