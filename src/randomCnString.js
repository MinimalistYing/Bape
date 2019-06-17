import random from './random'

/**
 * Generate random chinese string with given length
 * 
 * @param {integer} length 
 */
export default function randomCnString (length = 8) {
  if (!Number.isInteger(length) || length <= 0) throw new Error('length must be an integer large than 0')

  let str = ''
  for (let i = 0; i < length; i++) {
    // Chinese unicode range \u4e00 - \u9fa5
    const hex = random(19968, 40869).toString(16)
    str += String.fromCodePoint(parseInt(hex, 16))
  }
  return str
}
