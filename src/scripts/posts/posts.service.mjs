import FetchService from '../api/fetch.service.mjs';

class PostsService {
  constructor() {
    this._fetchService = new FetchService();
  }

  async findPaginatedPosts(page, limit) {
    return await this._fetchService.fetchData(`https://dummyjson.com/posts?limit=${limit}&page=${page}`);
  }
}

export default PostsService;
