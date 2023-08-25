import PostsController from './posts/posts.controller.mjs';

const container = document.getElementById('data-container');
const loadMoreButton = document.getElementById('load-more');
const pageSize = 10; // Количество элементов на странице
let currentPage = 1;
const postsController = new PostsController();

// const fetchPosts = async (page) => {

//   const response = await fetch(`https://dummyjson.com/posts?limit=${pageSize}&page=${page}`);
//   const data = await response.json();
//   return data.posts;
// };

const fetchPosts = async (page) => {

  // const response = await fetch(`https://dummyjson.com/posts?limit=${pageSize}&page=${page}`);
  const data = await postsController.getPosts(page, pageSize);
  console.log(data);
  return data.posts;
};

const renderData = (data) => {
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = item.title;
    container.appendChild(card);
  });
};

/* const renderData = (data) => {
  if (data.hasOwnProperty('data') && Array.isArray(data.data)) {
    data.data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = item.title;
      container.appendChild(card);
    });
  } else {
    console.error('Invalid data format:', data);
  }
};
 */

const loadMoreData = async () => {
  const data = await fetchPosts(currentPage);
  renderData(data);
  currentPage++;
};

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreData();
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
});

observer.observe(loadMoreButton);

loadMoreButton.addEventListener('click', loadMoreData);
