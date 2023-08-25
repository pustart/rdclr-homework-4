import PostsService from './posts.service.mjs';

class PostsController {
  constructor() {
    this._postsService = new PostsService();
  }

  async getPosts(page, limit) {
    return await this._postsService.findPaginatedPosts(page, limit);
  }
}

export default PostsController;
