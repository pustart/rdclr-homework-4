import FetchService from '../api/fetch.service.mjs';

class PostsService {
  constructor() {
    this._fetchService = new FetchService();
  }

  async findPaginatedPosts(page, limit) {
    let skip = 0;

    if (page !== 1) {
      skip = page * limit;
    }

    return await this._fetchService.fetchData(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
  }
}

export default PostsService;
