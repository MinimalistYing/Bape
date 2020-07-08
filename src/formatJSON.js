/**
 * Prettify JSON
 * 
 * @param {*} value 
 * @param {*} replacer Same as `JSON.stringify(value, replacer, space)`
 * @param {*} space Same as `JSON.stringify(value, replacer, space)`
 */
export default function formatJSON (value, replacer = null, space = 2) {
  let re = ''
  // If input is an object, there is no need to parse
  if (typeof value === 'object') return JSON.stringify(value, replacer, space)
  try {
    const parsed = JSON.parse(value)
    re = typeof parsed === 'object' ? JSON.stringify(JSON.parse(value), replacer, space) : value
  } catch (err) {
    re = String(value) || ''
  }
  return re
}
