import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomCard from './CustomCard';

describe('test card', () => {
  const itemTest = {
    image: '../../../assets/checked.png',
    title: 'Test',
    date: '2012-12-12',
    select: '#fff',
    radio: 'favorites',
    approve: 'on',
    id: 'dasdawd',
  };

  test('render custom card', async () => {
    render(<CustomCard card={itemTest} />);

    const img = screen.getAllByRole('img');
    const username = screen.getByText(itemTest.title);
    const date = screen.getByText(itemTest.date);

    expect(img).toHaveLength(3);
    expect(username).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
