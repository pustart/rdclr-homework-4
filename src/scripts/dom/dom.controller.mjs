import PostsController from "../posts/posts.controller.mjs";
import { PAGE_SIZE } from './dom.constants.mjs';

class DomController {
  constructor() {
    this._currentPage = 1;
    this._pageSize = PAGE_SIZE;
    this._postsController = new PostsController();
  }

  init() {
    this.loadNewPosts();
    const loadMoreButton = document.querySelector('.more-btn');
    loadMoreButton.addEventListener('click', this.loadNewPosts);
  }

  loadNewPosts = async () => {
    const data = await this._postsController.getPosts(this._currentPage, this._pageSize);
    const posts = data.posts;

    this._renderPostsList(posts);

    this._currentPage++;
  }

  _renderPostsList(posts) {
    const container = document.querySelector('.card-list');

    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.classList.add('card-list__item');

      const postCard = document.createElement("article");
      postCard.classList.add("post-card");
      listItem.appendChild(postCard);

      const postTitle = document.createElement("h2");
      postTitle.classList.add("post-card__title");
      postTitle.textContent = post.title;

      const postText = document.createElement("p");
      postText.classList.add("post-card__text");
      postText.textContent = post.body;

      postCard.appendChild(postTitle);
      postCard.appendChild(postText);
      container.appendChild(listItem);
    });
  }
}

export default DomController;
