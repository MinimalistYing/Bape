/**
 * Prettify JSON
 * 
 * @param {*} value 
 * @param {*} replacer Same as `JSON.stringify(value, replacer, space)`
 * @param {*} space Same as `JSON.stringify(value, replacer, space)`
 */
export default function formatJSON (value, replacer = null, space = 2) {
  let str = ''
  // 如果传入的是对象直接返回格式化后的字符串
  if (typeof value !== 'string') return JSON.stringify(value, replacer, space)
  try {
    str = JSON.stringify(JSON.parse(value), replacer, space)
  } catch (err) {
    str = String(value) || ''
  }
  return str
}
