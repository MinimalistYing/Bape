import random from './random'

/**
 * Generate random string with given length
 * 
 * @param {integer} length 
 */
export default function randomString (length = 8) {
  if (!Number.isInteger(length) || length <= 0) throw new Error('length must be an integer large than 0')
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  let str = ''
  for (let i = 0; i < length; i++) {
    str += arr[random(0, 51)]
  }
  return str
}
