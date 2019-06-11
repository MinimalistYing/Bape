import isObject from './isObject'
/**
 * Remove the give item in an Array, and return the new Array, useful in React / Vue
 * 
 * @param {Array} arr 
 * @param {*} item 
 */
export default function remove(arr, item) {
  if (!Array.isArray(arr)) throw new Error('arr must be an Array')

  const index = arr.findIndex(element => item === element)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return [ ...arr ]
}
