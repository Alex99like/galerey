import React from 'react';
import { render, screen } from '@testing-library/react';
import FetchApi from 'api/FetchApi';
import Modal from './Modal';

describe('test card', () => {
  const testFn = () => {};

  test('render card', async () => {
    const res = await (await FetchApi.getCards()).results;
    const random = Math.floor(Math.random() * res.length);

    const card = res[random];

    render(<Modal closeModal={testFn} card={card} />);

    const img = screen.getAllByRole('img');
    const username = screen.getByText(card.user.name);

    card.tags.forEach((tag) => {
      const el = screen.getByText(`#${tag.title}`);
      expect(el).toBeInTheDocument();
    });

    card.preview_photos.forEach((photo) => {
      const date = screen.getByText(photo.created_at.split('T')[0]);
      expect(date).toBeInTheDocument();
    });

    if (card.user.location) {
      const text = screen.getByText(card.user.location);
      expect(text).toBeInTheDocument();
    } else if (card.cover_photo.user.location) {
      const text = screen.getByText(card.cover_photo.user.location);
      expect(text).toBeInTheDocument();
    } else {
      const text = screen.getByText('HIDDEN');
      expect(text).toBeInTheDocument();
    }

    if (card.user.bio) {
      const text = screen.getByText(`${card.user.bio.slice(0, 60)}...`);
      expect(text).toBeInTheDocument();
    } else if (card.cover_photo.user.bio) {
      const text = screen.getByText(`${card.cover_photo.user.bio.slice(0, 60)}...`);
      expect(text).toBeInTheDocument();
    } else {
      const text = screen.getByText('No Description');
      expect(text).toBeInTheDocument();
    }

    expect(img).toHaveLength(12);
    expect(username).toBeInTheDocument();
  });
});
