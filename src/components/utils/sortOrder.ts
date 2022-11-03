import { IImageItem } from 'types/IImageItem';

export const sortOrder = (arr: IImageItem[], sort: string) => {
  switch (sort) {
    case 'latest': {
      console.log('1');
      const newArr = arr.sort((a, b) =>
        new Date(a.published_at).getTime() > new Date(b.published_at).getTime() ? 1 : -1
      );
      return newArr;
    }
    case 'oldest': {
      console.log('2');
      const newArr = arr.sort((a, b) =>
        new Date(a.published_at).getTime() > new Date(b.published_at).getTime() ? -1 : 1
      );
      return newArr;
    }
    default: {
      return arr;
    }
  }
};
