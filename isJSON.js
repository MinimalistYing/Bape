/**
 * Determine whether input is a correct JSON string or not
 * 
 * @param {*} value 
 */
export default function(input) {
  if (typeof input === 'object') return false
  try {
    JSON.parse(input)
  } catch (err) {
    return false
  }
  return true
}
