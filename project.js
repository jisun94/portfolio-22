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

// Cursor
const cursor = () => {
  const cursor = document.querySelector('.cursor');
  const a = document.querySelectorAll('a');

  document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  });

  a.forEach((item) => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
};
cursor();
