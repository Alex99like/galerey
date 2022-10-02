import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'components/common/Card';
import { fetchItemImage } from './components/utils/arrItems';
import CardsList from 'components/common/CardsList';

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

describe('test list cards', () => {
  test('render list cards', async () => {
    const res = await fetchItemImage();
    const results = [];

    render(<CardsList items={res} />);
    res.forEach((user) => {
      const card = screen.getByTestId(user.id);
      results.push(card);
      expect(card).toHaveClass('item-card');
      expect(card).toBeInTheDocument();
    });

    expect(results.length).toBe(res.length);

    screen.debug();
  });
});
