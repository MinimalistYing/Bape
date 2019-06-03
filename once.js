/**
 * Return a function which can only excute once
 * 
 * @param {function} fn 
 */
export default function once (fn) {
  if (typeof fn !== 'function') return () => {}
  const excuted = false

  return function (...args) {
    if (!excuted) {
      excuted = true
      fn.apply(this, args)
    }
  }
}
