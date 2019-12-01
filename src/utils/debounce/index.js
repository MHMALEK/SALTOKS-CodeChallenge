export function debounce(a, b, c) {
   let d;
   let e;
   return function() {
      function h() {
         (d = null), c || (e = a.apply(f, g));
      }
      // eslint-disable-next-line no-invalid-this
      const f = this;
      // eslint-disable-next-line prefer-rest-params
      const g = arguments;
      return clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e;
   };
}

export function throttled(delay, fn) {
   let lastCall = 0;
   return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
         return;
      }
      lastCall = now;
      return fn(...args);
   };
}
