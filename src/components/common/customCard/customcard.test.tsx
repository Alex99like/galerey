import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomCard from './CustomCard';

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
    render(<CustomCard item={itemTest} />);

    const img = screen.getAllByRole('img');
    const username = screen.getByText(itemTest.title);
    const date = screen.getByText(itemTest.date);

    expect(img).toHaveLength(3);
    expect(username).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
