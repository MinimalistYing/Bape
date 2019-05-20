/**
 * Check if a string is URL
 * 
 * @param {String} str 
 */
export default function isURL (str) {
  if (typeof str !== 'string') return false
  // From https://stackoverflow.com/a/8234912/8459774
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i.test(str)
}