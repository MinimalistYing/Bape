import isObject from './isObject'

/**
 * Determine whether input is an empty object
 * 
 * @param {*} input 
 */
export default function isEmptyObject (input) {
  if (!isObject(input)) return false

  return Object.keys(input).length === 0
}
