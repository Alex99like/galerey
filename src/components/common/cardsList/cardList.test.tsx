import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from 'components/common/cardsList/CardsList';
import { fetchItemImage } from 'components/utils/arrItems';
import FetchApi from 'api/FetchApi';

describe('test list cards', () => {
  const testFn = (state: boolean, id: string) => {
    return { state, id };
  };

  test('render list cards', async () => {
    const res = await fetchItemImage();
    const results = [];

    render(<CardsList stateModal={testFn} items={res} />);
    res.forEach((user) => {
      const card = screen.getByTestId(user.id);
      results.push(card);
      expect(card).toHaveClass('item-card');
      expect(card).toBeInTheDocument();
    });

    expect(results.length).toBe(res.length);
  });
});
