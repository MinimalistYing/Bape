/**
 * Prettify JSON
 * 
 * @param {*} value 
 * @param {*} replacer Same as `JSON.stringify(value, replacer, space)`
 * @param {*} space Same as `JSON.stringify(value, replacer, space)`
 */
export default function formatJSON (value, replacer = null, space = 2) {
  let str = ''
  // If input is string, there is no need to parse
  if (typeof value !== 'string') return JSON.stringify(value, replacer, space)
  try {
    str = JSON.stringify(JSON.parse(value), replacer, space)
  } catch (err) {
    str = String(value) || ''
  }
  return str
}
