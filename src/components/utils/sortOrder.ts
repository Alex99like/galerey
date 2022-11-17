import { IImageItem } from 'types/IImageItem';

export const sortOrder = (arr: IImageItem[], sort: string) => {
  switch (sort) {
    case 'latest': {
      const newArr = arr.sort((a, b) =>
        new Date(a.published_at).getTime() > new Date(b.published_at).getTime() ? 1 : -1
      );
      return newArr;
    }
    case 'oldest': {
      const newArr = arr.sort((a, b) =>
        new Date(a.published_at).getTime() > new Date(b.published_at).getTime() ? -1 : 1
      );
      return newArr;
    }
    case 'popular': {
      const newArr = arr.sort((a, b) => (a.cover_photo.likes > b.cover_photo.likes ? -1 : 1));
      return newArr;
    }
    default: {
      return arr;
    }
  }
};
