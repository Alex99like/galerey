type TKeyInStore = string;

interface IMockStore {
  [key: string]: string;
}

const mockLocalStorage = jest.fn(() => {
  let store: IMockStore = {};

  return {
    getItem: (key: string) => {
      return store[key as TKeyInStore] || null;
    },
    setItem: (key: string, value: string) => {
      store[key as TKeyInStore] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key as TKeyInStore];
    },
    clear: function () {
      store = {};
    },
  } as Storage;
});

describe('local storage', () => {
  const storage = mockLocalStorage();
  storage.setItem('key', 'vers-2');

  test('set item', () => {
    storage.setItem('set', 'vers-1');
    expect(storage.getItem('set')).toBe('vers-1');
  });

  test('get item', () => {
    expect(storage.getItem('key')).toBe('vers-2');
  });

  test('remove item', () => {
    storage.removeItem('key');
    expect(storage.getItem('key')).toBeNull();
  });

  test('clear', () => {
    storage.setItem('key', 'vers-2');
    storage.clear();
    expect(storage.getItem('key')).toBeNull();
  });
});
