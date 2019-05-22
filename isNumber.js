/**
 * Determine whether input is number, exclude NaN and Infinity
 * 
 * @param {*} input 
 */
export default function isNumber (input) {
  return typeof input === 'number' && Number.isFinite(input)
}
