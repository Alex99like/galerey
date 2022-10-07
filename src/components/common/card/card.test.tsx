import { fetchItemImage } from 'components/utils/arrItems';
import Card from './Card';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('test card', () => {
  test('render card', async () => {
    const res = await fetchItemImage();
    const random = Math.floor(Math.random() * res.length);

    const tags = res[random].tags;

    render(<Card item={res[random]} />);

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
