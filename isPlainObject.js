import isObject from './isObject'

/**
 * Determine whether input is a plain object
 * 
 * @param {*} input 
 */
export default function isPlainObject (input) {
  if (!isObject(input)) return false

  // For `Object.create(null)`
  if (Object.getPrototypeOf(input) === null) return true

  let proto = input
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return proto === Object.getPrototypeOf(input)
}
