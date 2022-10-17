import { fetchItemImage } from 'components/utils/arrItems';
import Card from './Card';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FetchApi from 'api/FetchApi';

describe('test card', () => {
  const testFn = () => {};

  test('render card', async () => {
    const res = await FetchApi.getCards();
    const random = Math.floor(Math.random() * res.length);

    const tags = res[random].tags;

    render(<Card callModal={testFn} item={res[random]} />);

    const img = screen.getAllByRole('img');
    const username = screen.getByText(res[random].user.name);

    tags.forEach((tag) => {
      const el = screen.getByText(`#${tag.title}`);
      expect(el).toBeInTheDocument();
    });

    expect(img).toHaveLength(3);
    expect(username).toBeInTheDocument();
  });
});
