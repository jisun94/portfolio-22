// Intersection observe

const options = {
  root: null,
  threshold: 0.6,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add('is-reveal');
    }
  });
}, options);

const project = document.querySelectorAll('.project-page-contents');

project.forEach((element) => {
  observer.observe(element);
});
