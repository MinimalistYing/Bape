import noop from './noop'

/**
 * force the input function can only invoke once during the wait time
 * 
 * @param {function} fn 
 * @param {number} wait 
 * @param {boolean} leading whether invoke function at begin or end, default at end
 */
export default function debounce (fn, wait = 0, leading = false) {
  if (typeof fn !== 'function') return noop

  let timer = null

  let canInvoke = true // use for leading case

  return function debounced (...args) {
    if (timer) clearTimeout(timer)

    if (leading && canInvoke) {
      fn.apply(args)
      canInvoke = false
    }

    timer = setTimeout(() => {
      if (leading) {
        canInvoke = true
      } else {
        fn.apply(args)
      }
    }, wait)
  }
}
