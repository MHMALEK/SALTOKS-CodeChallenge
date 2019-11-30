export function debounce(a, b, c) {
  var d, e
  return function() {
    function h() {
      ;(d = null), c || (e = a.apply(f, g))
    }
    var f = this,
      g = arguments
    return clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
  }
}

export function throttled(delay, fn) {
  let lastCall = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}
