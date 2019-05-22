/**
 * Determine whether input is a plain object
 * 
 * @param {*} input 
 */
export default function isObject (input) {
  return ((typeof input === 'object' && input !== null) || typeof input === 'function')
}
