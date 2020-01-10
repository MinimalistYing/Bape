import isPlainObject from './isPlainObject'

/**
 * basicly to avoid the error when get value from object like `a.b[0].c.d[0].e`
 *
 * @export
 * @param {Object} obj
 * @param {String} keys
 */
export default function safelyGet (obj, keys) {
  if (!isPlainObject(obj)) return undefined

  let current = obj
  for (let key of keys.split('.')) {
    if (/\[\d+\]$/.test(key)) { // ends with [1], try to get value from array
      let arrayBeginPos = key.indexOf('[')
      let arrayEndPos = key.indexOf(']')
      const objectKey = key.slice(0, arrayBeginPos)
      const index = Number(key.slice(arrayBeginPos + 1, arrayEndPos))
      if (canNotGet(current[objectKey])) return undefined
      if (canNotGet(current[objectKey][index])) return undefined
      current = current[objectKey][index]
    } else { // get value from object
      if (canNotGet(current[key])) return undefined
      current = current[key]
    }
  }
  return current
}

// when trying to get value from undefined or null will get Uncaught TypeError in JavaScript
function canNotGet(value) {
  return typeof value === 'undefined' || value === null
}
