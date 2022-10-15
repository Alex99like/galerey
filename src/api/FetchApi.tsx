import { IImageItem } from 'types/IImageItem';

class FetchApi {
  static async getCards(page = 1, search = 'new-york') {
    const response = await fetch(
      `https://api.unsplash.com/search/collections?page=${page}&query=${search}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID wYinecv5pjEh_oHIJFpAH6SWtWS2xBpmZcfpAF5eYwU',
        },
      }
    );

    const results = ((await response.json()) as { results: IImageItem[] }).results;

    return results;
  }
}

export default FetchApi;
