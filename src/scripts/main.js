import DomController from './dom/dom.controller.mjs';

const domController = new DomController();
domController.init();

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      domController.loadNewPosts();
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '100px',
  threshold: 1
});

observer.observe(domController.getLoadBtn());
