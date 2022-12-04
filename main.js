// O

const title1 = document.querySelector('#circle');

const about = document.querySelector('.about');

window.addEventListener('scroll', () => {
  let a = window.scrollY;
  if (a > 0) {
    title1.style.width = `${a}px`;
  } else {
    title1.style.width = '5vw';
  }
});

// Intersection observe

const options = {
  root: null,
  threshold: 0.6,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add('is-active');
    }
  });
}, options);

const text = document.querySelectorAll('.text');

text.forEach((element) => {
  observer.observe(element);
});

const target = document.querySelector('.contact-wrapper');
observer.observe(target);

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

//project text

const proText = document.querySelector('#proText h2');
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  proText.style.fontSize = `clamp(6vw, ${current / 8}px, 20vw)`;
});

// project image hover

const items = document.querySelectorAll('.project-item');

items.forEach((item) => {
  const photo = item.querySelector('.project-item-photo'),
    parent = item.parentElement;
  item.addEventListener('mousemove', (e) => {
    photo.classList.add('is-reveal');
    parent.classList.add('is-reveal');
    const cursorX = e.pageX;

    photo.style.left = `${cursorX}px`;
  });

  item.addEventListener('mouseleave', () => {
    photo.classList.remove('is-reveal');
    parent.classList.remove('is-reavel');
  });
});

// Scroll

function init() {
  new SmoothScroll(document, 70, 12);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body;

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target;

  target.addEventListener('mousewheel', scrolled, { passive: false });
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault();

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight));

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      else return -e.detail / 3;
    } else return e.wheelDelta / 120;
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

window.onload = init;

// refresh

history.scrollRestoration = 'manual';
