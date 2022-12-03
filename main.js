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
    // if (!entry.isIntersecting) return;
    // if (entry.isIntersecting) {
    //   entry.target.classList.add('is-active');
    // } else {
    //   entry.target.classList.remove('is-active');
    // }
  });
}, options);

const text = document.querySelectorAll('.text');

text.forEach((element) => {
  observer.observe(element);
});

const target = document.querySelector('.contact-wrapper');
observer.observe(target);

// Scroll

function init() {
  new SmoothScroll(document, 50, 12);
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

// const cursor = () => {
//   const cursor = document.querySelector('.cursor');

//   document.addEventListener('mousemove', (e) => {
//     let x = e.clientX;
//     let y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
//   });
// };

// cursor();

// const items = document.querySelectorAll('.project-item');

// items.forEach((item) => {
//   const photo = item.querySelector('.project-item-photo'),
//     parent = item.parentElement;
//   item.addEventListener('mousemove', (e) => {
//     photo.classList.add('is-reveal');
//     parent.classList.add('is-reveal');
//     const cursorX = e.pageX,
//       cursorY = e.pageY;

//     const itemLeft = item.getBoundingClientRect().left,
//       itemTop = item.getBoundingClientRect().top;

//     const photoPositionX = cursorX - itemLeft,
//       photoPositionY = cursorY - itemTop - window.scrollY;

//     if (photo.offsetHeight + 40 > e.clientY) {
//       photo.style.top = `${photoPositionY - photo.offsetHeight - 20}px`;
//     }

//     photo.style.left = `${photoPositionX + 20}px`;
//   });

//   item.addEventListener('mouseleave', () => {
//     photo.classList.remove('is-reveal');
//     parent.classList.remove('is-reavel');
//   });
// });

//project text
// const proText = document.querySelector('#proText h2');
// window.addEventListener('scroll', () => {
//   const current = window.scrollY;
//   proText.style.fontSize = `clamp(6vw, ${current / 8}px, 20vw)`;
// });

if (window.matchMedia('(min-width: 1200px)').matches) {
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

      const itemLeft = item.getBoundingClientRect().left;

      const photoPositionX = cursorX - itemLeft;

      photo.style.left = `${photoPositionX}px`;
    });

    item.addEventListener('mouseleave', () => {
      photo.classList.remove('is-reveal');
      parent.classList.remove('is-reavel');
    });
  });

  window.onresize = () => {
    location.reload();
  };
} else if (window.matchMedia('(min-width: 1200px)').matches) {
  const proText = document.querySelector('#proText h2');
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    proText.style.fontSize = `clamp(5rem, ${current / 15}px, 15rem)`;
  });
} else {
  const proText = document.querySelector('#proText h2');
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    proText.style.fontSize = `clamp(3rem, ${current / 15}px, 10rem)`;
  });

  // const proText = document.querySelector('#proText h2');
  // proText.style.fontSize = '5rem';
}
