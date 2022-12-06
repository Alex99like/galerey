import { IImageItem } from 'types/IImageItem';

interface IResponseApi {
  total: number;
  total_pages: number;
  results: IImageItem[];
}

class FetchApi {
  static async getCards(page = 1, search = 'new-york', sort = 'latest') {
    const response = await fetch(
      `https://api.unsplash.com/search/collections?page=${page}?order_by=${sort}&query=${search}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID wYinecv5pjEh_oHIJFpAH6SWtWS2xBpmZcfpAF5eYwU',
        },
      }
    );

    const results = (await response.json()) as IResponseApi;
    return results;
  }
}

export default FetchApi;
