import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomCard from 'components/common/customCard/CustomCard';
import Form from './Form';

describe('test card', () => {
  const itemTest = {
    title: 'Test',
    profile: '../../../assets/checked.png',
    date: '2012-12-12',
    color: '#fff',
    whoSee: {
      favorite: true,
      friends: false,
      allPeople: false,
    },
    approve: true,
  };

  test('render custom card', async () => {
    render(<Form getCard={{ fn: null }} />);

    const img = screen.getAllByRole('img');
    const username = screen.getByText('Your Photo');
    const radios = screen.getAllByRole('radio');
    const checkbox = screen.getAllByRole('checkbox');

    expect(img).toHaveLength(4);
    expect(radios).toHaveLength(3);
    expect(checkbox).toHaveLength(2);
    expect(username).toBeInTheDocument();
  });
});
